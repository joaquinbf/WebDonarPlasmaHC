const index_route = {}

/* render de rutas principales */
index_route.render_index = (req, res) => {
	res.render('index');
}

index_route.render_entrevista = (req, res) => {
	res.render('entrevista');
}

index_route.render_inicio_sesion = (req, res) => {
	res.render('inicio_sesion');
}

module.exports = index_route;