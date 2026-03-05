
import { redis } from "../utils/redis.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { sendEmail } from "../utils/sendEmail.js";

const OTP_TTL = 5 * 60;       // 5 minutes
const RESEND_COOLDOWN = 60;   // 60 seconds

const resendOtp = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const emailKey = email.trim().toLowerCase();

  const cooldown = await redis.get(`otp_resend:${emailKey}`);
  if (cooldown) {
    return res.status(429).json(
      new apiError(429, "Please wait 60 seconds before resending OTP")
    );
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await redis.setex(`otp:${emailKey}`, OTP_TTL, otp);
  await redis.setex(`otp_resend:${emailKey}`, RESEND_COOLDOWN, "1");

  // ✅ Send OTP using Brevo API
  await sendEmail(emailKey, otp);

  return res.status(200).json(
    new apiResponse(200, "OTP resent successfully")
  );
});

export { resendOtp };