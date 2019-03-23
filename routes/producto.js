const express = require('express');
const router = express.Router();
const producto = require('../models/producto');

router.get('/', (req, res, next) => {

    let codigo = req.query.codigo;

    const productoSeleccionado = producto.obtenerProducto(codigo);

    res.render("producto.ejs", {producto: productoSeleccionado});

});

module.exports = router;
