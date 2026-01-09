import { userDetails } from "../model/userModel.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { apiError } from "../utils/apiError.js"
import jwt from "jsonwebtoken"

const VerifyUser = asyncHandler(async (req, _, next) => {
    try {
        const authHeader = req.header("Authorization");
        const token = req.cookies?.token || (authHeader && authHeader.startsWith("Bearer", "") ? authHeader.slice(7) : null);

        if (!token) {
            throw new apiError(401, "Unauthorize Access")
        }

        const decode = jwt.verify(token, process.env.JWT_TOKEN);

        const user = await userDetails.findById(decode.id);

        if (!user) {
            throw new apiError(401, "Invalid user")
        }
        req.user = user;
        next();

    } catch (error) {
        throw new apiError(401, error?.message || "Invalid Token")
    }
})

export { VerifyUser }