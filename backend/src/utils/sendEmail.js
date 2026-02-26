import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host:"smtp-relay.brevo.com",
    port:587,
   secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
})

const sendEmail = async (email, otp) => {
   try {
    console.log(email);
    
    const info = await transporter.sendMail({
      from: `"OTP Service" <${process.env.EMAIL_USER}>`, // MUST match SMTP login
      to: email,
      subject: "Email Verification OTP",
      html: `<h2>Email Verification</h2>
             <p>Your OTP is:</p>
             <h1>${otp}</h1>
             <p>This OTP is valid for 10 minutes.</p>`,
    //   replyTo: "ansarisikkim5@gmail.com", // optional: replies go to your Gmail
    });

    console.log("Email sent successfully! SMTP Response:", info.response);
    return true;
  } catch (error) {
    console.error("Failed to send email. SMTP Error:", error);
    return false;
  }
}
// sendEmail("ansarisikkim5@gmail.com", "123456");


export { sendEmail, transporter };