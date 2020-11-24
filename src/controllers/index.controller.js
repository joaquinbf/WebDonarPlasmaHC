const index_route = {}

/* render de rutas principales */
index_route.render_index = (req, res) => {
	res.render('index');
}

index_route.render_entrevista = (req, res) => {
	res.render('entrevista');
}



module.exports = index_route;