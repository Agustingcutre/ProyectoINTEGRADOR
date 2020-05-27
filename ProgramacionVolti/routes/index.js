var express = require('express');
var router = express.Router();
var controladores = require('../controladores/controladores');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/listaGeneros", controladores.listaGeneros);
router.get("/favs", controladores.favoritos);
router.get("/buscadorAvanzado", controladores.buscadorAvanzado);
router.get("/detalleSerie", controladores.detalleSerie);
router.get("/buscador", controladores.buscador);
router.get("/registrarse", controladores.registrarse);
router.post("/registrarse", controladores.registrarUsuario);
router.get("/buscadorDeUsuarios", controladores.buscadorDeUsuarios);
router.get("/misResenas", controladores.misResenas);
router.get("/login", controladores.login);
router.post("/login", controladores.usuarioLogin);


module.exports = router;
