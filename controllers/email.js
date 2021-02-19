var mysql = require("mysql");
var config = require(".././database/database.js");
var urls = require(".././environments/environment.js");
var mail = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var email_plan = require("../template/email_plan");
var email_curriculum = require("../template/email_curriculum");


let pool;
const createPool = async () => {
  pool = await mysql.createPool(config);
};

createPool();

module.exports = {

  enviarEmail: function (req, res, next) {
    pool.query("SELECT * FROM catalogo_credenciales WHERE identificador = 'CORREOELECTRONICO' AND modo = '" + urls.modo + "'", function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows[0];

        let credenciales = mail.createTransport(smtpTransport({
          host: result.host,
          port: result.port,
          secure: false,
          auth: {
            user: result.email,
            pass: result.password
          }
        }));

        let opciones = {
          to: "info@adcontur.com",
          subject: req.body.asunto,
          html: req.body.tipo == 1 ? email_plan.email_plan(req.body.nombre, req.body.plan, req.body.precio, req.body.email, req.body.telefono, req.body.ventas, req.body.compras, req.body.afiliados) : ''
        };

        credenciales.sendMail(opciones, (error, info) => {
          if (error) {
            console.log(error);
            res.status(400).send({ 'resultado': error });
          } else {
            console.log('Message %s sent: %s', info.messageId, info.response);
            res.status(200).send({ 'resultado': info });
          }
        });


      }
    });

  },

  enviarEmailCurriculum: function (req, res, next) {

    pool.query("SELECT * FROM catalogo_credenciales WHERE identificador = 'CORREOELECTRONICO' AND modo = '" + urls.modo + "'", function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows[0];

        let credenciales = mail.createTransport(smtpTransport({
          host: result.host,
          port: result.port,
          secure: false,
          auth: {
            user: result.email,
            pass: result.password
          }
        }));

        var path = req.file.path;
        var direccion = path.replace("/public_html", "");

        console.log(req.file.path);
        console.log(direccion);

        let opciones = {
          to: "empleos@adcontur.com",
          subject: "SOLICITUD TRABAJA CONMIGO",
          html: email_curriculum.email_curriculum(req.body.identificacion, req.body.nombre, req.body.email, req.body.direccion, req.body.telefono, req.body.conocimientos, req.body.experiencia, req.body.salario, req.body.disponibilidad, req.body.cargo, "https://adcontur.com" + direccion),
        };

        credenciales.sendMail(opciones, (error, info) => {
          if (error) {
            console.log(error);
            res.status(400).send({ 'resultado': error });
          } else {
            console.log('Message %s sent: %s', info.messageId, info.response);
            res.status(200).send({ 'resultado': info });
          }
        });

      }
    });

  },

}
