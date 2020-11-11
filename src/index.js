const app = require('./server');
const db = require('./database');

/*Esta es la funcion principal*/
app.listen(3000, () => {
	console.log('server run in http://localhost:3000/');
});