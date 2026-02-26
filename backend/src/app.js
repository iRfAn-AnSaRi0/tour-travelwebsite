import express from "express"
import cors from "cors"
import cookieparser from "cookie-parser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true

}));

app.use(express.json({ limit: "24kb" }));
app.use(express.urlencoded({ limite: "24kb", extended: true }));
app.use(cookieparser());

import { userRouter } from "./routes/userRoute.js";

app.use("/api", userRouter)

import { messageRouter } from "./routes/enquiryRouter.js"

app.use("/api", messageRouter)

import {verifyOtpRouter} from "./routes/verifyOtp.js";

app.use("/api", verifyOtpRouter)

export { app };