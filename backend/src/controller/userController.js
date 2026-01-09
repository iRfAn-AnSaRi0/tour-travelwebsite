import { asyncHandler } from "../utils/asyncHandler.js"
import { apiError } from "../utils/apiError.js"
import { apiResponse } from "../utils/apiResponse.js"
import { userDetails } from "../model/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const generateJwtToken = (user) => {
    const token = jwt.sign(
        { id: user.id },
        process.env.JWT_TOKEN,
        { expiresIn: "1d" }
    )

    return { token }
}

const Register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body

    const checkUser = await userDetails.findOne({ email })
    if (checkUser) {
        return res.status(400).json(
            new apiError(
                400,
                "user already exist"
            )
        )
    }

    const saveUser = await userDetails.create({
        username,
        email,
        password
    });

    const { token } = generateJwtToken(saveUser)
    const option = {
        httpOnly: true,
        secure: true
    }

    if (saveUser) {
        return res.status(201).cookie("token", token, option).json(
            new apiResponse(
                201,
                { token },
                "Register successfully"
            )
        )
    } else {
        return res.status(500).json(
            new apiError(
                500,
                "Internal Server Error"
            )
        )
    }
})

const Login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await userDetails.findOne({ email }).select("password");

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

    const { token } = generateJwtToken(user)

    const option = {
        httpOnly: true,
        secure: true
    }

    return res.status(200).cookie("token", token, option).json(
        new apiResponse(
            200,
            { token },
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
            {user},
            "User fetched successfully"
        )
    )

})


export { Register, Login, GetUser }