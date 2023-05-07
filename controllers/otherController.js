import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";

// Contact Form
export const contact = catchAsyncError(async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return next(new ErrorHandler(`All fields are mandatory`, 400));

  const to = process.env.MY_MAIL;
  const subject = `Contact from Course Bundler`;
  const text = `Hello \nI am ${name} \nMy Email is ${email} \n${message}`;

  await sendEmail(to, subject, text);

  res.status(200).json({
    success: true,
    message: `Your Message Has Been Sent successfully`,
  });
});

// Request Form
export const courseRequest = catchAsyncError(async (req, res, next) => {
  const { name, email, course } = req.body;
  if (!name || !email || !course)
    return next(new ErrorHandler(`All fields are mandatory`, 400));

  const to = process.env.MY_MAIL;
  const subject = `Request for a course on Course Bundler`;
  const text = `Hello \nI am ${name} \nMy Email is ${email} \n${course}`;

  await sendEmail(to, subject, text);

  res.status(200).json({
    success: true,
    message: `Your Request Has Been Sent successfully`,
  });
});

// Get Admin Dashboard Stats
export const getDashboardStats = catchAsyncError(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Message sent successfully`,
  });
});
