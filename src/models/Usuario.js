const{model, Schema} = require("mongoose");
const bcrypt = require('bcryptjs')

const usuario_schema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },  
    user:{
        type:String,
        required:true,
				unique: true
    }
}, {
    timestamps:true
} )

usuario_schema.methods.encriptar_password = async function(password){
	console.log(password);
  const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);

}

usuario_schema.methods.comparar_password = async function(password){
  return await bcrypt.compare(password, this.password)
}

module.exports = model("Usuario", usuario_schema)