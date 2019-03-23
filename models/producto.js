
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

module.exports = {
    obtenerlistaProductos,
    obtenerProducto
}