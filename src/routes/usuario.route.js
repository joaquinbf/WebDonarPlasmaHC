const express = require('express');
const router = express.Router();

const {agregar_usuario, iniciar_usuario, render_iniciar_usuario} = require('../controllers/usuario.controller')
router.get('/agregar_usuario', agregar_usuario);
router.get('/iniciar_usuario', render_iniciar_usuario);
router.post('/iniciar_sesion', iniciar_usuario);


module.exports = router;