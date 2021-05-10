var express = require('express');
var router = express.Router();
var controller = require('../controllers');

var multer = require('multer');
var FTPStorage = require('multer-ftp');

var storage = new FTPStorage({
  basepath: '/public_html/archivos',
  ftp: {
    host: 'adcontur.com',
    secure: false,
    user: 'admin@adcontur.com',
    password: 'GUS@mEg5G7I*',
    port: 21
  },
  destination: function (req, file, options, callback) {
    callback(null, options.basepath + "/curriculum-" + Date.now() + "-" + file.originalname)
  }
});

var upload = multer({ storage: storage });

router.post('/enviarEmailCurriculum', upload.single('file'), controller.email.enviarEmailCurriculum);
router.post('/enviarEmail', controller.email.enviarEmail);

router.get('/listarServicios', controller.servicio.listarServicios);
router.get('/listarServicio', controller.servicio.listarServicio);

router.get('/listarTemas', controller.tema_interes.listarTemasInteres);
router.get('/listarCantidadTemasTipo', controller.tema_interes.listarCantidadTemasTipo);
router.get('/listarTemaDetalle', controller.tema_interes.listarTemaDetalle);

router.get('/listarRecursosLinea', controller.recursos_linea.listarRecursosLinea);
router.get('/listarDatosRuc', controller.recursos_linea.listarDatosRuc);

router.get('/trabaja', controller.trabaja.listarTrabajaNosotros);

//router.get('/linea', controller.recursos_linea.listarRecursosLinea);
//router.get('/lineaDetalles', controller.recursos_linea.listarRecursoLineaDetalles);


router.get('/linea', function (req, res, next) {res.render('world/linea', { tema: req.query.id });
});

//router.get('/acceso', controller.acceso.listarAcceso);

router.post('/registrarUsuario', controller.user.registrarUsuario);
router.post('/verificarUsuario', controller.user.verificarUsuario);

module.exports = router;