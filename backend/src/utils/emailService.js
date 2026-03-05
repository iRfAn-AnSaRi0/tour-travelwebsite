import axios from "axios";

const sendEnquiryEmail = async ({
  fullName,
  phone,
  email,
  preferredDate,
  message
}) => {
  try {

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Trail Travel Website",
          email: process.env.EMAIL_USER
        },
        to: [
          {
            email: process.env.ADMIN_EMAIL
          }
        ],
        replyTo: {
          email: email
        },
        subject: `New Enquiry from ${fullName}`,
        htmlContent: `
          <h2>New Enquiry Received</h2>

          <p><b>Name:</b> ${fullName}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Preferred Date:</b> ${preferredDate}</p>

          <p><b>Message:</b></p>
          <p>${message}</p>
        `
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Enquiry email sent successfully ✅", response.data);
    return true;

  } catch (error) {
    console.error(
      "Brevo Enquiry Email Error:",
      error.response?.data || error.message
    );
    return false;
  }
};

export { sendEnquiryEmail }