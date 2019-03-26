const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

router.get('/', (req, res, next) =>{
    
//    const listaProductos = Producto.obtenerlistaProductos();    
//    res.render("productos.ejs", {productos: listaProductos});

    Producto.Producto.find({})
        .exec()
        .then( productosDB => {
            res.render("productos.ejs", {
                productos: productosDB,
                agregarBotonInsert: (productosDB.length == 0)
            });
        })
        .catch(err => console.log('Error:', err))      

});

router.get('/insertarProductos', (req, res, next) => {
    
    Producto.insertarProductos();
    
    res.redirect('/');

    /* let producto = new Producto.Producto({
        nombre: "SegundoProducto",
        codigo: "0170"
    });

    producto.save((err, productoDB) => {

        if (err){ 
            //retorno con un codigo 400 (BadRequest)
            return res.status(400).json({
                ok: false,
                err
            })
        };

        //caso contrario, devuelvo un 200 (implicito) y el productoDB
        res.json({
            ok: true, 
            producto: productoDB
        });

    }); */

})

module.exports = router;