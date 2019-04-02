
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
}

let usuarioSchema = new Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    apellido: {
        type: String, 
        required: [true,'El apellido es necesario']
    },
    email: {
        type: String,
        required: [true, 'El email es necesario'],
        unique: true
    },
    contraseña: {
        type: String,
        required: [true, 'La contraseña es necesaria'],
        unique: true
    },
    role: {
        type: String, 
        default: 'USER_ROLE',
        enum: rolesValidos
    }
});

//Seteamos el plugin de validacion al schema
usuarioSchema.plugin( uniqueValidator, {
    message: '{PATH} debe ser unico'
});

module.exports = mongoose.model('Usuario', usuarioSchema);