const { model, Schema } = require('mongoose');
const bcrypt = require('bcryptjs');

const usuario_schema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

usuario_schema.methods.encriptarPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

usuario_schema.methods.compararPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model('Usuario', usuario_schema);
