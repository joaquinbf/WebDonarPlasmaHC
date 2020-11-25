const express = require('express');
const router = express.Router();

const {
  agregarUsuario,
  iniciarSesion,
  renderIniciarSesionForm,
} = require('../controllers/usuario.controller');

router.get('/usuario/agregar', agregarUsuario);
router.get('/usuario/iniciarSesion', renderIniciarSesionForm);
router.post('/usuario/iniciarSesion', iniciarSesion);

module.exports = router;
