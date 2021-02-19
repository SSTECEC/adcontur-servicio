var mysql = require("mysql");
var config = require(".././database/database.js");
var urls = require(".././environments/environment.js");
const request = require("request-promise");

let pool;
const createPool = async () => {
  pool = await mysql.createPool(config);
};

createPool();

module.exports = {

  listarRecursosLinea: function (req, res, next) {

    pool.query('SELECT * FROM servicio ORDER BY orden ASC', function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows;
        res.render('world/linea', { "url_imagen": urls.url_imagenes, "data": result });
      }
    });
  },

  listarRecursoLineaDetalles: function (req, res, next) {

    pool.query('SELECT * FROM servicio ORDER BY orden ASC', function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows;
        res.render('world/lineaDetalles', { "url_imagen": urls.url_imagenes, "data": result });
      }
    });
  },

  listarDatosRuc: function (req, res, next) {

    var options = {
      method: 'GET',
      uri: "http://144.91.73.120/ruc/getRuc.php?id=" + req.query.ruc,
      json: true
    };

    request(options)
      .then(function (data) {
        res.status(200).send(data);
      })
      .catch(function (err) {
        res.status(500).send(err);
      });

  },

  listarDatosMicroempresa: function (req, res, next) {

    var options = {
      method: 'GET',
      uri: "http://144.91.73.120/excel_formulas/getMicroempresa.php?id=" + req.query.ruc,
      json: true
    };

    request(options)
      .then(function (data) {
        res.status(200).send(data);
      })
      .catch(function (err) {
        res.status(500).send(err);
      });

  },

  listarDatosEspecial: function (req, res, next) {

    var options = {
      method: 'GET',
      uri: "http://144.91.73.120/excel_formulas/getEspeciales.php?id=" + req.query.ruc,
      json: true
    };

    request(options)
      .then(function (data) {
        res.status(200).send(data);
      })
      .catch(function (err) {
        res.status(500).send(err);
      });

  },

  listarDatosFantasma: function (req, res, next) {

    var options = {
      method: 'GET',
      uri: "http://144.91.73.120/excel_formulas/getFantasma.php?id=" + req.query.ruc,
      json: true
    };

    request(options)
      .then(function (data) {
        res.status(200).send(data);
      })
      .catch(function (err) {
        res.status(500).send(err);
      });

  },

  listarDatosAgenteRetencion: function (req, res, next) {

    var options = {
      method: 'GET',
      uri: "http://144.91.73.120/excel_formulas/getAgente.php?id=" + req.query.ruc,
      json: true
    };

    request(options)
      .then(function (data) {
        res.status(200).send(data);
      })
      .catch(function (err) {
        res.status(500).send(err);
      });

  },

}
