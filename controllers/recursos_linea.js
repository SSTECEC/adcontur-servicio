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

    pool.query('SELECT * FROM recursos WHERE estado != 3 ORDER BY orden ASC', function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': err, 'tipo': 5 });
      } else {
        var result = rows;
        res.status(200).send({ 'resultado': result, 'tipo': 1 });
      }
    });
  },


  listarDatosRuc: function (req, res, next) {

    var options = {
      method: 'POST',
      uri: "http://api.sam.center/v1/ConsultaRuc",
      body: {
        ruc: req.query.ruc
      },
      headers: {
        'ruc': '1792419557001',
        'uid': '440b1cec-e8a7-4e2a-a806-13e362482f59',
      },
      json: true
    };

    request(options)
      .then(function (data) {
        var datos = data;
        if(datos.estado == "OK"){
          res.status(200).send(datos.json);
        }else{
          res.status(500).send(datos);
        }
        
      })
      .catch(function (err) {
        res.status(500).send(err);
      });

  },


}
