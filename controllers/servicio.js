var mysql = require("mysql");
var config = require(".././database/database.js");
var urls = require(".././environments/environment.js");
let pool;
const createPool = async () => {
  pool = await mysql.createPool(config);
};

createPool();

module.exports = {

  listarServicios: function (req, res, next) {

    pool.query(`
      SELECT
      servicio.idServicio, 
      servicio.titulo, 
      servicio.titulo_imagen, 
      servicio.titulo_imagen_tamano, 
      CONCAT(SUBSTRING(servicio.descripcion_corta, 1, 80),'...') AS descripcion_corta2,
      servicio.descripcion_corta, 
      servicio.descripcion_completa, 
      servicio.imagen, 
      servicio.estado, 
      servicio.path, 
      servicio.orden
    FROM
      servicio
    ORDER BY
    orden ASC`, function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows;
        pool.query(`SELECT tema.idTema, CONCAT(SUBSTRING(tema.titulo, 1, 27),'...') AS titulo, CONCAT(UPPER(MONTHNAME( tema.fecha )),' ', YEAR ( tema.fecha )) AS fechaAbreviada, tipo_tema.nombre FROM tema INNER JOIN tipo_tema ON tema.idTipoTema = tipo_tema.idTipoTema ORDER BY tema.idTema DESC LIMIT 2`, function (err2, rows2, fields) {
          if (err2) {
            console.log(err2);
            res.status(500).send({ 'resultado': 5 });
          } else {
            var result2 = rows2;
            res.render('world/inicio', { "url_imagen": urls.url_imagenes, "temas": result2, "data": result });
          }
        });
      }
    });
  },

  listarServicio: function (req, res, next) {
    pool.query('SELECT * FROM servicio ORDER BY orden ASC', function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows;
        pool.query('SELECT * FROM servicio WHERE idServicio = ?', [req.query.idServicio], function (err2, rows2, fields) {
          if (err2) {
            console.log(err2);
            res.status(500).send({ 'resultado': 5 });
          } else {
            var result2 = rows2[0];
            res.render('world/servicioDetalle', { "url_imagen": urls.url_imagenes, "servicio": result2, "data": result });
          }
        });
      }
    });
  },

  listarServicioComplemento: function (req, res, next) {
    pool.query('SELECT * FROM servicio ORDER BY orden ASC', function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows;
        pool.query('SELECT * FROM servicio WHERE idServicio = ?', [req.query.idServicio], function (err2, rows2, fields) {
          if (err2) {
            console.log(err2);
            res.status(500).send({ 'resultado': 5 });
          } else {
            var result2 = rows2[0];
            res.send(result2);
          }
        });
      }
    });
  },

}
