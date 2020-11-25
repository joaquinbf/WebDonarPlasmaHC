const express = require('express');
const rutaIndex = express.Router();
const {
  renderIndex,
  renderEntrevista,
} = require('../controllers/index.controller');

/*rutaIndexs principales */
rutaIndex.get('/', renderIndex);
rutaIndex.get('/entrevista', renderEntrevista);

module.exports = rutaIndex;
