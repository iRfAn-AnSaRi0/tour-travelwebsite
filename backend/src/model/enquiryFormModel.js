import mongoose, { Schema } from "mongoose"


const enquirySchema = new Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userDetails",
         required:true
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        minlength: [2, "Full name must be at least 2 characters"],
        maxlength: [50, "Full name must be max 50 characters"],
        match: [
            /^[a-zA-Z]+( [a-zA-Z]+)*$/,
            "Full name can contain only letters and single spaces"
        ]
    },
    phone: {
        type: String,
        required: true,
        match: [
            /^[6-9]\d{9}$/,
            "Enter a valid 10-digit mobile number"
        ]
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        match: [
            /^\S+@\S+\.\S+$/,
            "Enter a valid email address"
        ]
    },
    preferredDate: {
        type: Date,
        validate: {
            validator: function (value) {
                if (!value) return true;
                return value >= new Date().setHours(0, 0, 0, 0);
            },
            message: "Travel date cannot be in the past"
        }
    },
    message: {
        type: String,
        required: true,
        minlength: [10, "Message must be at least 10 characters"],
        maxlength: [500, "Message must be max 500 characters"]
    }
}, { timestamps: true })

export const enquiryDetails = mongoose.model("enquiryDetails", enquirySchema)