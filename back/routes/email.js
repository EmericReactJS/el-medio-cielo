var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const emailCredentials = require('../helper/email');
const app = express();
const path = require('path');
const pug = require('pug');
const emailLayout = pug.compileFile(path.join(app.get('views'), 'layoutCustomer.pug'));
const emailLayoutOwner = pug.compileFile(path.join(app.get('views'), 'layoutOwner.pug'));

const oauth2Client = new OAuth2(
  emailCredentials.clientID, // ClientID
  emailCredentials.clientSecret, // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: "1/0TCTWuqHnp4Xhdoa6dTXuoRYsRH1l18ZaBn_QeFYaqw"
});
// const tokens = oauth2Client.refreshAccessToken()
const accessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  tls: {
    rejectUnauthorized: false
  },
  auth: {
    type: "OAuth2",
    user: "contacto.elmediocielo@gmail.com", 
    clientId: emailCredentials.clientID,
    clientSecret: emailCredentials.clientSecret,
    refreshToken: "1/0TCTWuqHnp4Xhdoa6dTXuoRYsRH1l18ZaBn_QeFYaqw",
    accessToken: accessToken
  }
 });

// function resolveDisponibility(dispo) {
//   const disponibility = {}
//   if(dispo.semana === true) {
//     disponibility.semana = 'oui';
//   } else disponibility.semana = 'non';
//   if(dispo.fines === true) {
//     disponibility.fines = 'oui';
//   } else disponibility.fines = 'non';
//   return disponibility;
// }

// function resolveModality(modal) {
//   const modality = {}
//   if(modal.casa === true) {
//     modality.casa = 'oui';
//   } else modality.casa = 'non';
//   if(modal.distancia === true) {
//     modality.distancia = 'oui';
//   } else modality.distancia = 'non';
//   return modality;
// }

router.post('/', (req, res) => {
  const formData = req.body.formField;
  const formDisponibility = req.body.formField;
  const formModality = req.body.formField;
  console.log(formData.formField);
  const mailCustomer = {
    from: 'contacto.elmediocielo@gmail.com',
    to: formData.email,
    subject: 'Lectura One-shot',
    html: emailLayout({ name: formData.nombre })
  };
  transporter.sendMail(mailCustomer, (err, info) => {
    if(err)
      console.log(err)
    else
      console.log(info);
  });
  const mailOwner = {
    from: 'contacto.elmediocielo@gmail.com',
    to: 'contacto.elmediocielo@gmail.com',
    subject: 'Lecture One-shot',
    html: emailLayoutOwner({
      name: formData.nombre,
      birth: formData.fecha,
      place: formData.lugar,
      hour: formData.hora,
      disponibility: formDisponibility.fines,
      modality: formModality.distancia
    })
  }
  transporter.sendMail(mailOwner, (err,info) => {
    if(err)
      console.log(err)
    else
      console.log(info);
  })
})

module.exports = router;
