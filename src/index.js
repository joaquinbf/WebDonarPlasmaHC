const app = require('./server');

/*Esta es la funcion principal*/
app.listen(3000, () => {
	console.log('server run in http://localhost:3000/');
});