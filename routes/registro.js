const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

    res.render('registro.ejs');

});

router.post('/', (req, res, next ) => {

    console.log('//TODO: MIDDLEWARE PARA VALIDACIONES Y CREACION DE USUARIO');

    res.redirect('/');

});

module.exports = router;