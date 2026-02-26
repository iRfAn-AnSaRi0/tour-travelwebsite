import { asyncHandler } from "../utils/asyncHandler.js"
import { apiError } from "../utils/apiError.js"
import { apiResponse } from "../utils/apiResponse.js"
import { enquiryDetails } from "../model/enquiryFormModel.js"
import { transporter } from "../utils/sendEmail.js"


const SendMessage = asyncHandler(async (req, res) => {
    const { fullName, phone, email, preferredDate, message } = req.body;
    const userID = req.user.id;

    const createMessage = await enquiryDetails.create({
        user: userID,
        fullName,
        phone,
        email,
        preferredDate,
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

     // Send email to admin
  try {
    await transporter.sendMail({
      from: `"OTP Service" <${process.env.EMAIL_USER}>`,
       replyTo: email, // user's email
      to: process.env.ADMIN_EMAIL,
      subject: `New Enquiry from ${fullName}`,
      html: `
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Preferred Date:</b> ${preferredDate}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });
  } catch (err) {
    console.error("Failed to send email:", err.message);
  }

  transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP connection failed:", error);
  } else {
    console.log("SMTP ready to send messages ✅");
  }
});


    return res.status(201).json(
        new apiResponse(
            201,
            "Message Send Successfully"
        )
    )
})

export { SendMessage }