import { Router } from "express";
import { SendMessage } from "../controller/enquiryFormController.js"
import { VerifyUser } from "../middleware/authMiddleware.js"

const messageRouter = Router();

messageRouter.route("/message").post(
    VerifyUser,
    SendMessage
)

export { messageRouter }