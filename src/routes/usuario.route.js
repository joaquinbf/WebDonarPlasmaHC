const express = require('express');
const router = express.Router();

const {agregar_usuario} = require('../controllers/usuario.controller')
router.get('/agregar_usuario', agregar_usuario);

module.exports = router;