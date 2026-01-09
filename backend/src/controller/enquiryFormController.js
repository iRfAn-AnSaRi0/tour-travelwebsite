import { asyncHandler } from "../utils/asyncHandler.js"
import { apiError } from "../utils/apiError.js"
import { apiResponse } from "../utils/apiResponse.js"
import { enquiryDetails } from "../model/enquiryFormModel.js"


const SendMessage = asyncHandler(async (req, res) => {
    const { fullname, contactnumber, email, preferredtravedate, message } = req.body;
    const userID = req.user.id;

    const createMessage = await enquiryDetails.create({
        user: userID,
        fullname,
        contactnumber,
        email,
        preferredtravedate,
        message
    })

    if (!createMessage) {
        return res.status(500).json(
            new apiError(
                500,
                "Internal Server Error"
            )
        )
    }

    return res.status(201).json(
        new apiResponse(
            201,
            "Message Send Successfully"
        )
    )
})

export { SendMessage }