import { Router } from "express";
import { Register, Login, GetUser } from "../controller/userController.js";
import { VerifyUser } from "../middleware/authMiddleware.js"

const userRouter = Router();

userRouter.route("/register").post(
    Register
)

userRouter.route("/login").post(
    Login
)

userRouter.route("/me").get(
   VerifyUser,
   GetUser
)

export { userRouter }