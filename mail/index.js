const nodemailer = require('nodemailer');
const template = require('./template');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const mailOptions = item => {
  const { to, subject, text } = template(item);

  return {
    from: process.env.MAIL_FROM,
    to,
    subject,
    text,
  };
};

const sendEmail = async mail => {
  const send = await transporter.sendMail(mail);
  console.log('Message sent: %s', send.messageId);
};

module.exports = {
  sendEmail,
  mailOptions,
};
