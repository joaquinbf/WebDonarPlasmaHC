const express = require('express');
const router = express.Router();

const {
	renderAgregarUsuario,
  agregarUsuario,
  iniciarSesion,
  renderIniciarSesionForm,
	renderSesionIniciada,

} = require('../controllers/usuario.controller');


router.get('/usuario/iniciarSesion', renderIniciarSesionForm);
router.post('/usuario/iniciarSesion', iniciarSesion);
router.get('/usuario/sesionIniciada', renderSesionIniciada);
router.post('/usuario/agregar', agregarUsuario);
router.get('/usuario/agregar', renderAgregarUsuario );
/*router.delete('/usuario/borrarUsuario', borrarUsuario);*/
/*router.put('usuario/actualizarUsuario', actualizarUsuario);*/

module.exports = router;
