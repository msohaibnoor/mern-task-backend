const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const { welcomeEmailTemplate } = require("../utils/EmailTemplates/welcomeEmail");
exports.sendWelcomeEmail = (email, subject, password) => {
  console.log({ email, password });
  console.log(process.env.SMTP_USERNAME);
  console.log(process.env.SMTP_PASSWORD);
  let transporter = nodemailer.createTransport(
    smtpTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
      }
    })
  );
  let mailOptions = {
    from: process.env.SMTP_USERNAME,
    to: email,
    subject: subject,
    html: welcomeEmailTemplate(password)
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    console.log(info);
  });
};
