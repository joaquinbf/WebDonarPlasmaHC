const express = require('express');
const app = express();

/*configuracion*/

/*ruteo*/
app.get('/', (req, res) => {
	res.send('<h1> hello world </h1>');
})

app.get('/perfil', (req, res) => {
	res.send(req.params);
})



module.exports = app;