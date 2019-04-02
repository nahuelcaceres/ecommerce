var express = require('express');
var router = express.Router();
const { usuarioLogueado, desloguearUsuario } = require('../middlewares/autenticacion');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'eCommerce', logueado: usuarioLogueado(req) });
  //si esta logueado, muestro el link, desloguear

});

router.get('/logout', (req, res, next) => {
  
  if (usuarioLogueado(req)){
    desloguearUsuario(req);
  }

  res.redirect('/');

});

module.exports = router;
