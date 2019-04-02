const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

router.get('/', (req, res, next) => {

    res.render('registro.ejs');

});

router.post('/', (req, res, next ) => {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        apellido: body.apellido,
        email: body.email,
        contraseña: body.contraseña 
    });

    usuario.save((err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
 
        //va sin el .status(200) porque esta implicito
        /* res.json({
            ok: true, 
            usuario: usuarioDB
        }); */

        res.redirect('/');
    });

    //console.log('//TODO: MIDDLEWARE PARA VALIDACIONES Y CREACION DE USUARIO');


});

module.exports = router;