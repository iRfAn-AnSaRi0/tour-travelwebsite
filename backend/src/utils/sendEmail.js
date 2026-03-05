import axios from "axios";

const sendEmail = async (email, otp) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "OTP Service",
          email: process.env.EMAIL_USER
        },
        to: [
          {
            email: email
          }
        ],
        subject: "Email Verification OTP",
        htmlContent: `
          <h2>Email Verification</h2>
          <p>Your OTP is:</p>
          <h1>${otp}</h1>
          <p>This OTP is valid for 10 minutes.</p>
        `
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Email sent:", response.data);
    return true;

  } catch (error) {
    console.error("Brevo API Error:", error.response?.data || error.message);
    return false;
  }
};

export { sendEmail };