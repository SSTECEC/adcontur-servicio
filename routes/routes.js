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

//router.post('/gestionServicio', controller.user.gestionServicio);

//router.get('/listarServicio', controller.servicio.listarServicio);

/*router.get('/', function (req, res, next) {
  res.render('world/inicio', { "url_imagen": urls.url_imagenes, "data": controller.servicio.listarServicios });
});*/

router.get('/', controller.servicio.listarServicios);
router.get('/servicio', controller.servicio.listarServicio);
router.get('/listarServicioComplemento', controller.servicio.listarServicioComplemento);
router.get('/temas', controller.tema_interes.listarTemasInteres);
router.get('/detalle', controller.tema_interes_detalle.visualizarTemaDetalle);
router.get('/detalleTema', controller.tema_interes_detalle.listarTemaDetalle);
router.get('/trabaja', controller.trabaja.listarTrabajaNosotros);
router.get('/linea', controller.recursos_linea.listarRecursosLinea);
router.get('/lineaDetalles', controller.recursos_linea.listarRecursoLineaDetalles);
router.get('/listarDatosRuc', controller.recursos_linea.listarDatosRuc);
router.get('/listarDatosMicroempresa', controller.recursos_linea.listarDatosMicroempresa);
router.get('/listarDatosEspecial', controller.recursos_linea.listarDatosEspecial);
router.get('/listarDatosFantasma', controller.recursos_linea.listarDatosFantasma);
router.get('/listarDatosAgenteRetencion', controller.recursos_linea.listarDatosAgenteRetencion);
router.get('/listarTemasInteresFiltro', controller.tema_interes.listarTemasInteresFiltro);
router.get('/linea', function (req, res, next) {res.render('world/linea', { tema: req.query.id });
});

router.get('/acceso', controller.acceso.listarAcceso);


router.post('/enviarEmail', controller.email.enviarEmail);
router.post('/registrarUsuario', controller.user.registrarUsuario);
router.post('/verificarUsuario', controller.user.verificarUsuario);

module.exports = router;