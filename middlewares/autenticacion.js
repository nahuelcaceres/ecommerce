var listaUsuariosLogueados = [];

let vericarUsuarioLogueado = (req, res, next) => {

    if (usuarioLogueado(req)){
        next();

    } else {

        res.redirect('/login');
    }

};

function generaToken(){
    let token;

    token = 'usuariologueado' + Date.now();
    listaUsuariosLogueados.push({usuario: token});
    
    return token;
}

function desloguearUsuario(req){
    
    listaUsuariosLogueados = listaUsuariosLogueados.filter(function(usuario) {
        return usuario.usuario !== req.cookies['user'];
    });
    
}

function usuarioLogueado(req){
    let logueado;

    //Tengo que mirar si el req.cookies['user'] existe
    if (req.cookies['user']) {
        //Ahora tengo que ver si lo tengo en mi lista de logueados
        listaUsuariosLogueados.find((user) =>{
            if(user.usuario == req.cookies['user']){
                logueado = true;
            }
        });
    };

    return logueado;
}

module.exports = {
    vericarUsuarioLogueado,
    usuarioLogueado,
    generaToken,
    desloguearUsuario
};