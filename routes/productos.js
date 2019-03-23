const express = require('express');
const router = express.Router();
const producto = require('../models/producto');

router.get('/', (req, res, next) =>{
    
    const listaProductos = producto.obtenerlistaProductos();
    
    res.render("productos.ejs", {productos: listaProductos});
});

module.exports = router;