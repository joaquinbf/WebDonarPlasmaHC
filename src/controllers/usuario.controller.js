const usuario_route = {}
const Usuario = require("../models/Usuario")

usuario_route.agregar_usuario = async (req, res) => {
    const usuario = {
			nombre: 'jefa',
      apellido:'¨de emoterapia',
      email: 'jefa-emoterapia@gmail.com',
      user: 'jefecita777',
      password: '1234',
		}

		const {nombre, apellido, email, user, password} = usuario
    const nuevo_usuario = new Usuario({nombre, apellido, email, user, password})
    await nuevo_usuario.save()
		console.log('usuario salvado')
}

module.exports = usuario_route;