import { Router } from "express";
import { verifyOtp } from "../middleware/verifyOtp.js";
import { resendOtp } from "../controller/resendOtp.js";

const verifyOtpRouter = Router();

verifyOtpRouter.route("/verify-otp").post(verifyOtp);

verifyOtpRouter.route("/resend-otp").post(resendOtp);

export { verifyOtpRouter }