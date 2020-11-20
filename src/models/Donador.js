const{model, Schema} = require("mongoose");

const donador_schema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    tipo_donador:{
        type:String,
        required:true
    },

}, {
    timestamps:true
} )
module.exports = model("Donador", donador_schema)