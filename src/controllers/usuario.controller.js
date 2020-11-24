const usuario_route = {}
const Usuario = require("../models/Usuario")

usuario_route.render_iniciar_usuario = (req, res) => {
  res.render('inicio_sesion');
}

usuario_route.iniciar_usuario = (req, res) => {
  res.send('inicio_sesion');
}

usuario_route.agregar_usuario = async (req, res) => {
    const usuario = {
			nombre: 'jefa',
      apellido:'¨de emoterapia',
      email: 'jefa-emoterapia@gmail.com',
      user: 'jefecita777',
      password: '1234',
		}

		const {nombre, apellido, email, user, password} = usuario;
    const nuevo_usuario = new Usuario({nombre, apellido, email, user, password});
    nuevo_usuario.password = await nuevo_usuario.encriptar_password(usuario.password);
    await nuevo_usuario.save();

}

module.exports = usuario_route;