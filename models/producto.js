
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); 

let Schema = mongoose.Schema;

let productoSchema =  new Schema({
    nombre: {
        type: String,
        required: [true,'El nombre es necesario']
    },
    descripcion: {
        type: String
    },
    imgSource: {
        type: String
    },
    precio: {
        type: mongoose.Types.Decimal128 
    },
    precioDescuento: {
        type: mongoose.Types.Decimal128
    },
    codigo: {
        type: String,
        required: [true, 'El codigo es necesario'],
        unique: true
    }
});

//Seteamos el plugin de validacion al schema
productoSchema.plugin( uniqueValidator, {
    message: '{PATH} debe ser unico'
});

const listaProductos = [
    {nombre: "producto_01", descripcion: "Descripcion del producto 1", imgSource: "https://http2.mlstatic.com/arduino-D_NP_212121-MLA20705624530_052016-Q.webp", precio: 100, precioDescuento: 80, codigo: '0001'},
    {nombre: "producto_02", descripcion: "Descripcion del producto 2", imgSource: "https://http2.mlstatic.com/D_NP_976458-MLA28580731059_112018-Q.webp", precio: 200, precioDescuento: 180, codigo: '0002'},
    {nombre: "producto_03", descripcion: "Descripcion del producto 3", imgSource: "https://http2.mlstatic.com/D_NP_773630-MLA29297008911_012019-Q.webp", precio: 300, precioDescuento: 270, codigo: '0003'},
    {nombre: "producto_04", descripcion: "Descripcion del producto 4", imgSource: "https://http2.mlstatic.com/arduino-D_NP_751241-MLA29331792217_022019-Q.webp", precio: 400, precioDescuento: 360, codigo: '0004'}
];

function obtenerlistaProductos(){
    return listaProductos;
}

function obtenerProducto(codigoProducto){

     return listaProductos.find((producto) => {
            return producto.codigo === codigoProducto;
     }) ;

}

function insertarProductos(){

    /* const listaProductos = [
        {nombre: "producto_01", descripcion: "Descripcion del producto 1", imgSource: "https://http2.mlstatic.com/arduino-D_NP_212121-MLA20705624530_052016-Q.webp", precio: 100, precioDescuento: 80, codigo: '0001'},
        {nombre: "producto_02", descripcion: "Descripcion del producto 2", imgSource: "https://http2.mlstatic.com/D_NP_976458-MLA28580731059_112018-Q.webp", precio: 200, precioDescuento: 180, codigo: '0002'},
        {nombre: "producto_03", descripcion: "Descripcion del producto 3", imgSource: "https://http2.mlstatic.com/D_NP_773630-MLA29297008911_012019-Q.webp", precio: 300, precioDescuento: 270, codigo: '0003'},
        {nombre: "producto_04", descripcion: "Descripcion del producto 4", imgSource: "https://http2.mlstatic.com/arduino-D_NP_751241-MLA29331792217_022019-Q.webp", precio: 400, precioDescuento: 360, codigo: '0004'}
    ]; */

    listaProductos.forEach((productoItem, index) => {

        let producto = new mongoose.model('Producto', productoSchema)({
            nombre: productoItem.nombre,
            codigo: productoItem.codigo,
            descripcion: productoItem.descripcion,
            imgSource: productoItem.imgSource,
            precio: productoItem.precio,
            precioDescuento: productoItem.precioDescuento
        });
    
        producto.save((err, productoDB) => {
    
            if (err){ 
                console.log('error', err);
            };
        });

    })

    let producto = new mongoose.model('Producto', productoSchema)({
        nombre: "CuartoProducto",
        codigo: "1199",
        descripcion: "Descripcion del producto 4",
        imgSource: "https://http2.mlstatic.com/arduino-D_NP_751241-MLA29331792217_022019-Q.webp",
        precio: 400,
        precioDescuento: 360
    });

    producto.save((err, productoDB) => {

        if (err){ 
            console.log('error', err);
        };
    });

}

module.exports = {
    Producto: mongoose.model('Producto', productoSchema),
    obtenerlistaProductos,
    obtenerProducto,
    insertarProductos
}