import isDev from "../../../../utils/isDev";
import axios from "axios";

export const sendEmailToMe = async (email: string, subject: string, message: string) => {
  try {
    const req = await axios.request({
      method: "POST",
      url: isDev() ? "http://localhost:9743/folioapi/email/sendEmail" : "/folioapi/email/sendEmail",
      data: {
        email,
        subject,
        message,
      },
    });

    console.log(req);
    return req;
  } catch (error: any) {
    console.log(error);
    console.log(error.response);
  }
};
