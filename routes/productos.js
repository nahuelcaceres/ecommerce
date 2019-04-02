const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');
const { vericarUsuarioLogueado } = require('../middlewares/autenticacion');

//Lo primero que tengo que hacer es mirar si esta logueado
router.get('/', vericarUsuarioLogueado, (req, res, next) =>{

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

router.post('/insertarProductos', (req, res, next) => {
    
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