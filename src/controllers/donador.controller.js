const rutaDonador = {};
const Donador = require('../models/Donador');

rutaDonador.agregarDonador = async function(req, res) {
	const { nombre, apellido, telefono, email, tipo_donador } = req.body;
	const errores = [];

	if (!nombre) {
		errores.push({ text: 'Porfavor, ingresar nombre' });
	}
	if (!apellido) {
		errores.push({ text: 'Porfavor, ingresar apellido' });
	}
	if (!telefono) {
		errores.push({ text: 'Porfavor, ingresar numero de telefono' });
	}
	if (!email) {
		errores.push({ text: 'Porfavor, ingresar email' });
	}
	const donador = await Donador.findOne({ email: email });
	if (donador) {
		console.log(donador);
		errores.push({ text: 'Su direccion de email ya fue ingresado en el sistema.' })
	}
	if (errores.length > 0) {
		res.render('entrevista_formulario_contacto', { errores })
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

rutaDonador.listarDonadores = async function(req, res) {
	try {
		const donadores = await Donador.find({}).lean();
		res.render('listado_donadores', { donadores });
	} catch (err) {
    console.log(err);
	}
};

rutaDonador.renderAgregarDonadorForm = function(req, res) {
	res.render('entrevista_formulario_contacto');
};
module.exports = rutaDonador;
