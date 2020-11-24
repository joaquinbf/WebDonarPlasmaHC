const express = require('express');
const router = express.Router();
const {render_index, render_entrevista, render_inicio_sesion} = require('../controllers/index.controller')

/*rutas principales */
router.get('/', render_index);
router.get('/entrevista', render_entrevista);



module.exports = router;