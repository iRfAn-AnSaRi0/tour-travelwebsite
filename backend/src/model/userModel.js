import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Username must be at least 3 characters"],
        maxlength: [30, "Username must be max 30 characters"],
        match: [
            /^[a-zA-Z]+( [a-zA-Z]+)*$/,
            "Username can contain only letters and single spaces"
        ]
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email address"
        ]
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
            "Password must contain uppercase, lowercase, number and special character"
        ],
        select: false
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })


userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10)
})

export const userDetails = mongoose.model("userDetails", userSchema)