import nodemailer, { Transporter } from "nodemailer";
import ejs from "ejs";
import path from "path";
require("dotenv").config();

interface EmailOptions {
  email: string;
  subject: string;
  template: string;
  data: Record<string, any>;
}

export const sendMail = async (options: EmailOptions): Promise<void> => {
  const transporter: Transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST as string,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: true, // use TLS
    service: process.env.SMTP_SERVICE as string,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  const { email, subject, template, data } = options;
  // path to mail template file
  const templatePath = path.join(__dirname, "../mails", template);

  const html = await ejs.renderFile(templatePath, data);

  const mailOptions = {
    from: process.env.SMTP_MAIL as string,
    to: email,
    subject,
    html,
  };

  await transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.log("message sent");
    })
    .catch((error: any) => {
      console.log("send mail error", error);
    });
};
