import { redis } from "../utils/redis.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { userDetails } from "../model/userModel.js";
import { generateJwtToken } from "../controller/userController.js";

const MAX_ATTEMPTS = 5;
const BLOCK_TIME = 15 * 60; // 15 minutes

const verifyOtp = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;
  const emailKey = email.trim().toLowerCase();

  // 🚫 Check if blocked
  const isBlocked = await redis.get(`otp_block:${emailKey}`);
  if (isBlocked) {
    return res.status(429).json(
      new apiError(
        429,
        "Too many wrong attempts. Try again after 15 minutes."
      )
    );
  }

  const storedOtp = await redis.get(`otp:${emailKey}`);

  if (!storedOtp) {
    return res.status(400).json(
      new apiError(400, "OTP expired or invalid")
    );
  }

  // ❌ Wrong OTP
  if (storedOtp !== String(otp)) {
    const attempts = await redis.incr(`otp_attempts:${emailKey}`);

    if (attempts >= MAX_ATTEMPTS) {
      await redis.setex(`otp_block:${emailKey}`, BLOCK_TIME, "1");
      await redis.del(`otp:${emailKey}`);
    }

    return res.status(400).json(
      new apiError(400, "OTP expired or invalid")
    );
  }

  // ✅ Correct OTP → reset attempts
  await redis.del(`otp:${emailKey}`);
  await redis.del(`otp_attempts:${emailKey}`);
  await redis.del(`otp_block:${emailKey}`);

  // mark verified
  const user = await userDetails.findOneAndUpdate(
    { email: emailKey },
    { isVerified: true },
    { new: true }
  );

  if (!user) {
    return res.status(404).json(
      new apiError(404, "User not found")
    );
  }

  const { token } = generateJwtToken(user);

  return res.status(200).json(
    new apiResponse(
      200,
      { token, user },
      "Email verified successfully"
    )
  );
});

export { verifyOtp };
