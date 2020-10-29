const express = require('express');
const router = express.Router();
const {render_body, render_entrevista_dinamica, render_iniciar_sesion} = require('../controllers/index.controller')

/*rutas principales */
router.get('/', render_body);

router.get('/entrevista-dinamica', render_entrevista_dinamica);

router.get('/iniciar-sesion', render_iniciar_sesion);

module.exports = router;