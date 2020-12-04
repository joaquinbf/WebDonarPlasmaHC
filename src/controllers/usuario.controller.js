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



rutaUsuario.iniciarSesion = passport.authenticate ('local', {
 successRedirect: '/usuario/sesionIniciada',
 failureRedirect: '/usuario/iniciarSesion',
 failureFlash: true
})

rutaUsuario.agregarUsuario = async function (req, res) {
  const usuario = {
    nombre: 'jefa',
    apellido: '¨de emoterapia',
    email: 'jefa-emoterapia@gmail.com',
    user: 'jefecita777',
    password: '1234',
  };

  const { nombre, apellido, email, user, password } = usuario;
  const nuevo_usuario = new Usuario({
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
