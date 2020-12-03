const express = require('express');
const router = express.Router();

const {
  renderAgregarDonadorForm,
  agregarDonador,
  listarDonadores,
  eliminarDonador,
  actualizarDonador,
} = require('../controllers/donador.controller');
const {estaAutorizado} = require('../helpers/autenticacion');

router.post('/donador/agregar', agregarDonador);
router.get('/donador/agregar', renderAgregarDonadorForm);
router.get('/donador/donadores', estaAutorizado, listarDonadores);
router.post('/donador/eliminar/:id', estaAutorizado, eliminarDonador)
router.post('/donador/actualizar/:campo/:id',estaAutorizado,actualizarDonador)

module.exports = router;
