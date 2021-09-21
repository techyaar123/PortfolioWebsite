import nodemailer from "nodemailer";
export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "abhinavkatiyar123@gmail.com",
      pass: "taybdqnbwaygzqsm",
    },
    secure: true,
  });
  const mailData = {
    from: "abhinavkatiyar123@gmail.com",
    to: [req.body.email, "abhinavkatiyar123@gmail.com"],
    subject: `Message From ${req.body.name1}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>Thank you for sending us feedback.<br>
    Message: ${req.body.message}<br>

    We will keep your suggestions with us and improve in future.</div><p>Sent from:
      Abhinav Katiyar(Owner)</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
