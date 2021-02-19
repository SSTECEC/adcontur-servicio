var mysql = require("mysql");
var config = require(".././database/database.js");
var urls = require(".././environments/environment.js");
let pool;
const createPool = async () => {
  pool = await mysql.createPool(config);
};

createPool();

module.exports = {

  visualizarTemaDetalle: function (req, res, next) {

    pool.query('SELECT * FROM servicio ORDER BY orden ASC', function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows;
        res.render('world/temaDetalle', { "url_imagen": urls.url_imagenes, "data": result });
      }
    });

  },

  listarTemaDetalle: function (req, res, next) {

    pool.query(`SELECT tema.idTema, tema.titulo, tema.descripcion, tema.adjunto, tema.estado, tema.fecha, CONCAT(UPPER(MONTHNAME( tema.fecha )),' ',YEAR ( tema.fecha )) AS fechaAbreviada, tipo_tema.idTipoTema, tipo_tema.nombre FROM tema INNER JOIN tipo_tema ON tema.idTipoTema = tipo_tema.idTipoTema WHERE idTema = ?`, [req.query.idTema], function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows[0];
        res.status(200).send(result);
      }
    });

  },
    
}
