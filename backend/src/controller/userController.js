import { asyncHandler } from "../utils/asyncHandler.js"
import { apiError } from "../utils/apiError.js"
import { apiResponse } from "../utils/apiResponse.js"
import { userDetails } from "../model/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {redis} from "../utils/redis.js"
import {sendEmail} from "../utils/sendEmail.js"

const generateJwtToken = (user) => {
    const token = jwt.sign(
        { id: user.id },
        process.env.JWT_TOKEN,
        { expiresIn: "1d" }
    )

    return { token }
}

const Register = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;
  const emailKey = email.trim().toLowerCase();

  const existingUser = await userDetails.findOne({ email: emailKey });
  if (existingUser) {
    return res.status(400).json(
      new apiError(400, "User already exists")
    );
  }

  // ✅ create unverified user
  await userDetails.create({
    fullName,
    email: emailKey,
    password,
    isVerified: false,
  });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log("OTP:", otp);

  // ✅ FIXED KEY
  await redis.set(`otp:${emailKey}`, otp, "EX", 500);

  const sent = await sendEmail(emailKey, otp);
  if (!sent) {
    return res.status(500).json(
      new apiError(500, "Failed to send OTP email")
    );
  }

  return res.status(201).json(
    new apiResponse(
      201,
      { email: emailKey },
      "OTP sent to your email"
    )
  );
});


const Login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await userDetails.findOne({ email }).select("+password");
    // console.log(user);

    // console.log("USER PASSWORD:", user.password);

    if (!user) {
        return res.status(400).json(
            new apiError(
                400,
                "Invalid email or password"
            )
        )
    }

    const passwordCheck = await bcrypt.compare(password, user.password);

    if (!passwordCheck) {
        return res.status(400).json(
            new apiError(
                400,
                "Invalid email or password"

            )
        )
    }

      if (!user.isVerified) {
    return res.status(403).json(
      new apiError(
        403,
        "Email not verified",
        {
          needVerification: true,
          email: user.email
        }
      )
    );
  }

    const { token } = generateJwtToken(user)

    const option = {
        httpOnly: true,
        secure: true
    }

    return res.status(200).cookie("token", token, option).json(
        new apiResponse(
            200,
            { token },
            {
                user: {
                    _id: user._id,
                    fullName: user.fullName,
                    email: user.email,
                    isVerified:user.isVerified,
                },
            },
            "Login successfully"
        )
    )
})

const GetUser = asyncHandler(async (req, res) => {
    const userID = req.user
    const user = await userDetails.find(userID).select("username email");

    if (!user) {
        return res.status(401).json(
            new apiError(
                401,
                "No user found"
            )
        )
    }

    return res.status(200).json(
        new apiResponse(
            200,
            { user },
            "User fetched successfully"
        )
    )

})


export { Register, Login, GetUser, generateJwtToken }