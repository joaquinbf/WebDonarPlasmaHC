const express = require('express');
const router = express.Router();

const {render_formulario_contacto_donador} = require('../controllers/entrevista.controller')
router.get('/formulario_contacto_donador', render_formulario_contacto_donador);

module.exports = router;