const express = require('express');
const router = express.Router();
const { usuarioLogueado, generaToken } = require('../middlewares/autenticacion');
const Usuario = require('../models/usuario');

router.get('/', (req, res, next) =>{
    
    res.render('login.ejs');

});

router.post('/', (req, res, next) => {

    let body = req.body;

    if ( body.username != null && body.password != null){

        Usuario.findOne({email: body.username, contraseña: body.password}).exec(function(err, usuarioDB) {
            res.cookie('user', generaToken(), { expires: new Date(Date.now() + 900000), httpOnly: true});
    
            res.redirect('/productos');
        });
    
    }else {
        res.redirect('/');
    }

});

module.exports = router;