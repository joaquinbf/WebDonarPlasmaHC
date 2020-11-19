const express = require('express');
const router = express.Router();

const {agregar_donador} = require('../controllers/donador.controller')
router.post('/agregar_donador', agregar_donador);

router.get('/listar_donadores', listar_donadores);

module.exports = router;