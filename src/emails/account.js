const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mohamed.0thman9988@gmail.com",
    subject: "Thanks for joinig in ",
    text: `welcome to the app ${name}`,
  });
};

const sendCancleEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mohamed.0thman9988@gmail.com",
    subject: "can we help you",
    text: `best wishes to you ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancleEmail,
};
