const express = require('express');
const router = express.Router();

const {
  renderAgregarDonador,
  agregarDonador,
  listarDonadores,
} = require('../controllers/donador.controller');
const {estaAutorizado} = require('../helpers/autenticacion');

router.post('/donador/agregar', agregarDonador);
router.get('/donador/agregar', renderAgregarDonador);
router.get('/donador/donadores', estaAutorizado, listarDonadores);

module.exports = router;
