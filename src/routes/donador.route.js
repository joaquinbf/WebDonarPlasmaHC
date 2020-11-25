const express = require('express');
const router = express.Router();

const {
  renderAgregarDonadorForm,
  agregarDonador,
  listarDonadores,
} = require('../controllers/donador.controller');

router.post('/donador/agregar', agregarDonador);
router.get('/donador/agregar', renderAgregarDonadorForm);
router.get('/donador/donadores', listarDonadores);

module.exports = router;
