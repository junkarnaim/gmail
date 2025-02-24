import nodemailer from "nodemailer";
import { config } from "dotenv"; // Import config from "dotenv"
config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASS,
  },
});

const sendEmail = async (mailOptions) => {
  console.log(process.env.USERNAME)
  console.log(process.env.PASS)
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error(error);
  }
}

export default sendEmail;