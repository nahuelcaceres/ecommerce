const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{

    res.render('login.ejs');

});

router.post('/', (req, res, next) => {
    console.log('//TODO: HACER MIDDLEWARE PARA CHEQUER DE DATOS AL LOGUEAR');
    
    res.redirect('/');
});


module.exports = router;