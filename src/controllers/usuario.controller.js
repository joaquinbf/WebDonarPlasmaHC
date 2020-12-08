const rutaUsuario = {};
const Usuario = require('../models/Usuario');
const passport = require('passport')

rutaUsuario.renderIniciarSesionForm = function (req, res) {
  res.render('inicio_sesion');
};

rutaUsuario.renderSesionIniciada = function (req, res) {
  res.send ("Sesion Iniciada")
}
rutaUsuario.renderAgregarUsuario = function (req, res ){
  res.render("formulario_agregar_usario")
}

rutaUsuario.actualizarUsuario = function (req, res){
  res.send("Actualizar Usuario")
}
rutaUsuario.cerrarSesion = function (req, res){
  req.logout()
	res.redirect('/')
}


rutaUsuario.iniciarSesion = passport.authenticate ('local', {
 successRedirect: '/usuario/sesionIniciada',
 failureRedirect: '/usuario/iniciarSesion',
 failureFlash: true
})

rutaUsuario.agregarUsuario = async function (req, res) {
  const usuario = {nombre, apellido, email, user, password, password2} = req.boody;
  const errores = [];

	if (!nombre) {
		errores.push({ text: 'Porfavor, ingresar nombre' });
	}
	if (!apellido) {
		errores.push({ text: 'Porfavor, ingresar apellido' });
	}
	if (!email) {
		errores.push({ text: 'Porfavor, ingresar email' });
	}

  const usuario = await Usuario.findOne({ email: email });
	if (ususario) {
		console.log(usuario);
		errores.push({ text: 'Su direccion de email ya fue ingresado en el sistema.' })

	if (!user) {
		errores.push({ text: 'Porfavor, ingresar nombre de usuario' });
	}
	if (!password) {
		errores.push({ text: 'Porfavor, ingresar contraseña' });
	}
	if (!password2) {
		errores.push({ text: 'Porfavor, confirmar contraseña' });
	}
  
   const comparar = await Usuario.findOne({ password: password2 });
   if(comparar){



   }

  const { nombre, apellido, email, user, password } = usuario;
  const nuevo_usuario = new Usario({
    nombre,
    apellido,
    email,
    user,
    password,
  });
  nuevo_usuario.password = await nuevo_usuario.encriptar_password(
    usuario.password
  );
  await nuevo_usuario.save();
};

module.exports = rutaUsuario;
