import nodemailer from "nodemailer";

const smtpTransport = nodemailer.createTransport({
  service: "Naver",
  host: "smtp.naver.com",
  port: 587,
  auth: {
    user: process.env.NMID,
    pass: process.env.NMPW,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default smtpTransport;
