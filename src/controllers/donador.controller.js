const rutaDonador = {};
const Donador = require('../models/Donador');

rutaDonador.agregarDonador = async function (req, res) {
  const { nombre, apellido, telefono, email, tipo_donador } = req.body;
  const errors = [];

  if (!nombre) {
    errors.push({ text: 'Porfavor, ingresar nombre' });
  }
  if (!apellido) {
    errors.push({ text: 'Porfavor, ingresar apellido' });
  }
  if (!telefono) {
    errors.push({ text: 'Porfavor, ingresar numero de telefono' });
  }
  if (!email) {
    errors.push({ text: 'Porfavor, ingresar email' });
  }
	if (Donador.findOne({email: email})) {
		errors.push({text: 'Su direccion de email ya fue ingresado en el sistema.'})
	}
  if (errors.length > 0) {
    res.send(errors)
  } else {
    const nuevo_donador = new Donador({
      nombre,
      apellido,
      telefono,
      email,
      tipo_donador,
    });
    await nuevo_donador.save();
  }
};
rutaDonador.listarDonadores = async function (req, res) {
  const donadores = await Donador.find({}).lean();
  res.render('listado_donadores', { donadores });
};
rutaDonador.renderAgregarDonadorForm = function (req, res) {
  res.render('entrevista_formulario_contacto');
};
module.exports = rutaDonador;
