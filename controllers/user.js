var mysql = require("mysql");
var config = require(".././database/database.js");
var urls = require(".././environments/environment.js");
let pool;
const createPool = async () => {
  pool = await mysql.createPool(config);
};

createPool();

module.exports = {

  registrarUsuario : function (req, res, next) {

    pool.query("INSERT INTO usuario(Identificacion,Usuario,Email,Password,Celular,Rol,Estado) VALUES (?,?,?,?,?,?,?)", 
    [req.body.Identificacion,req.body.Usuario,req.body.Email,req.body.Password, req.body.Celular,req.body.Rol,1],
    function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows;
        res.send(result);
      }
    });
  },

  verificarUsuario : function (req, res) {

    pool.query("SELECT * FROM usuario WHERE usuario.Email = ? AND usuario.Password = ?", 
    [req.body.Email,req.body.Password],
    function (err, rows) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows[0];
        res.send(result);
      }
    });
    
  },


}
