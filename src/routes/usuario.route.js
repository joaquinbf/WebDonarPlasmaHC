const express = require('express');
const router = express.Router();

const {
	renderAgregarUsuario,
  agregarUsuario,
  iniciarSesion,
  renderIniciarSesion,
	cerrarSesion
} = require('../controllers/usuario.controller');
const {estaAutorizado} = require('../helpers/autenticacion');

router.get('/usuario/iniciarSesion', renderIniciarSesion);
router.post('/usuario/iniciarSesion', iniciarSesion);
router.post('/usuario/agregar',estaAutorizado, agregarUsuario);
router.get('/usuario/agregar',estaAutorizado, renderAgregarUsuario );
router.get('/usuario/cerrarSesion',estaAutorizado, cerrarSesion);
/*router.delete('/usuario/borrarUsuario', borrarUsuario);*/
/*router.put('usuario/actualizarUsuario', actualizarUsuario);*/

module.exports = router;
