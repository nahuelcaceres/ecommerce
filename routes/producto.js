const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');
const { vericarUsuarioLogueado } = require('../middlewares/autenticacion');

router.get('/', vericarUsuarioLogueado, (req, res, next) => {

    let codigoPedido = req.query.codigo;

    //const productoSeleccionado = producto.obtenerProducto(codigo);

    Producto.Producto.findOne({codigo: codigoPedido}, (err, productoDB) => {
        res.render("producto.ejs", {producto: productoDB});
    });

    // select only the adventures name
    //Adventure.findOne({ type: 'iphone' }, 'name', function (err, adventure) {});

});

module.exports = router;
