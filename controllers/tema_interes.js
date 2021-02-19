var mysql = require("mysql");
var config = require(".././database/database.js");
var urls = require(".././environments/environment.js");
let pool;
const createPool = async () => {
  pool = await mysql.createPool(config);
};

createPool();

module.exports = {

  listarTemasInteres: function (req, res, next) {

    pool.query('SELECT * FROM servicio ORDER BY orden ASC', function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows;
        pool.query(`
        SELECT
        tema.idTema,
        tema.titulo,
        CONCAT(
          UPPER(
        IF(MONTH(tema.fecha) = 1, "Enero", IF(MONTH(tema.fecha) = 2, "Febrero", IF(MONTH(tema.fecha) = 3, "Marzo", IF(MONTH(tema.fecha) = 4, "Abril", IF(MONTH(tema.fecha) = 5, "Mayo", IF(MONTH(tema.fecha) = 6, "Junio", IF(MONTH(tema.fecha) = 7, "Julio", IF(MONTH(tema.fecha) = 8, "Agosto", IF(MONTH(tema.fecha) = 9, "Septiembre", IF(MONTH(tema.fecha) = 10, "Octubre", IF(MONTH(tema.fecha) = 11, "Noviembre", IF(MONTH(tema.fecha) = 12, "Diciembre", ""))))))))))))
        )
        ,
        ' '
        ,
        YEAR ( tema.fecha )
        ) AS fechaAbreviada,
        tipo_tema.nombre 
      FROM
        tema
        INNER JOIN tipo_tema ON tema.idTipoTema = tipo_tema.idTipoTema 
      ORDER BY 
        tema.fecha DESC
        `, function (err2, rows2, fields) {
          if (err2) {
            console.log(err2);
            res.status(500).send({ 'resultado': 5 });
          } else {
            var result2 = rows2;
            res.render('world/temas', { "url_imagen": urls.url_imagenes, "temas": result2, "data": result });
          }
        });
      }
    });

  },

  listarTemasInteresFiltro: function (req, res, next) {

    pool.query(`
    SELECT
	tema.idTema,
	tema.titulo,
	CONCAT(
		UPPER(
	IF(MONTH(tema.fecha) = 1, "Enero", IF(MONTH(tema.fecha) = 2, "Febrero", IF(MONTH(tema.fecha) = 3, "Marzo", IF(MONTH(tema.fecha) = 4, "Abril", IF(MONTH(tema.fecha) = 5, "Mayo", IF(MONTH(tema.fecha) = 6, "Junio", IF(MONTH(tema.fecha) = 7, "Julio", IF(MONTH(tema.fecha) = 8, "Agosto", IF(MONTH(tema.fecha) = 9, "Septiembre", IF(MONTH(tema.fecha) = 10, "Octubre", IF(MONTH(tema.fecha) = 11, "Noviembre", IF(MONTH(tema.fecha) = 12, "Diciembre", ""))))))))))))
	)
	,
	' '
	,
	YEAR ( tema.fecha )
	) AS fechaAbreviada,
	tipo_tema.nombre 
FROM
	tema
	INNER JOIN tipo_tema ON tema.idTipoTema = tipo_tema.idTipoTema 

WHERE 
tema.titulo LIKE '%`+ req.query.filtro + `%'
OR tipo_tema.nombre LIKE '%`+ req.query.filtro + `%'

ORDER BY
	tema.idTema DESC
    `, function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows;
        res.status(200).send({ 'resultado': result });
      }
    });

  }

}
