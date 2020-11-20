const express = require('express');
const router = express.Router();

const {render_agregar_donador, agregar_donador, listar_donadores} = require('../controllers/donador.controller')

router.post('/agregar_donador', agregar_donador);
router.get('/agregar_donador', render_agregar_donador);
router.get('/listar_donadores', listar_donadores);

module.exports = router;