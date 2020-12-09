const rutaUsuario = {};
const Usuario = require('../models/Usuario');
const passport = require('passport');

rutaUsuario.renderIniciarSesion = function (req, res) {
  res.render('inicio_sesion');
};

rutaUsuario.renderAgregarUsuario = function (req, res) {
  res.render('formulario_agregar_usuario');
};

rutaUsuario.actualizarUsuario = function (req, res) {
  res.send('Actualizar Usuario');
};
rutaUsuario.cerrarSesion = function (req, res) {
  req.logout();
  res.redirect('/');
};

rutaUsuario.iniciarSesion = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/usuario/iniciarSesion',
  failureFlash: true,
});

rutaUsuario.agregarUsuario = async function (req, res) {
  const { nombre, apellido, email, user, password, password2 } = req.body;
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
  if (usuario) {
    console.log(usuario);
    errores.push({
      text: 'Su direccion de email ya fue ingresado en el sistema.',
    });
  }

  if (!user) {
    errores.push({ text: 'Porfavor, ingresar nombre de usuario' });
  }
  if (!password) {
    errores.push({ text: 'Porfavor, ingresar contraseña' });
  }
  if (!password2) {
    errores.push({ text: 'Porfavor, confirmar contraseña' });
  }

  if (errores.length > 0) {
    res.render('/usuario/renderAgregarUsuario', { errores });
  } else {
    const nuevoUsuario = new Usuario({
      nombre,
      apellido,
      email,
      user,
      password,
    });

    nuevoUsuario.password = await nuevoUsuario.encriptarPassword(
      usuario.password
    );
    await nuevoUsuario.save();
  }
};

module.exports = rutaUsuario;
