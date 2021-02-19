var mysql = require("mysql");
var config = require(".././database/database.js");
var urls = require(".././environments/environment.js");
let pool;
const createPool = async () => {
  pool = await mysql.createPool(config);
};

createPool();

module.exports = {

    listarAcceso: function (req, res, next) {

    pool.query('SELECT * FROM servicio ORDER BY orden ASC', function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows;
        res.render('world/login-register', { "url_imagen": urls.url_imagenes, "data": result });
      }
    });
  },

}
