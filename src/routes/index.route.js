const express = require('express');
const router = express.Router();
const {render_body, render_entrevista_dinamica} = require('../controllers/index.controller')

router.get('/', render_body);

router.get('/entrevista-dinamica', render_entrevista_dinamica);


module.exports = router;