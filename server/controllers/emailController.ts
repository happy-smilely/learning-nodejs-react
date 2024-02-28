// d
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API);
import { NextFunction, Request, Response } from "express";
import * as EmailHelper from "../services/emailService";

// Using SendGrid and its API..
const sendMail = async (message: Object) => {
  try {
    await sgMail.send(message);
  } catch (error: any) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

export const sendEmailToMe = async (email: string, subject: string, message: string) => {
  const msg = {
    to: `${email}`, // Change to your recipient
    from: process.env.ADMIN_EMAIL, // Change to your verified sender....
    subject: `Message from ${email}`,
    text: EmailHelper.sendEmailText(email, subject, message),
    html: EmailHelper.sendEmailHTML(email, subject, message),
  };

  await sendMail(msg);
  return msg;
};

exports.sendEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { email, subject, message } = req.body;
  console.log(req.body);

  try {
    await sendEmailToMe(email, subject, message);
    res.json({
      status: "success",
    });
  } catch (error) {
    res.json({
      status: "failed",
    });
  }
};
