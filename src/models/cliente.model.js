const { Schema, model } = require('mongoose');
const clienteSchema = new Schema({
        nombre_negocio: String,
        categoria: String,
        Direccion: String,
        Eslogan: String,
        descripccion_negocio: String,
        descripccion_dos: String,
        Num_telefonico: String,          
        Correo: String
})

module.exports = model('Cliente', clienteSchema);