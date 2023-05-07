import app from "./app.js";
import { connectDB } from "./config/database.js";
import cloudinary from "cloudinary";
import Razorpay from "razorpay";
connectDB();

const PORT = process.env.PORT;

// Cloudinary Config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// RazorPay Instance
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.listen(PORT, () => {
  console.log(`Server is working on port: ${PORT}`.magenta);
});
