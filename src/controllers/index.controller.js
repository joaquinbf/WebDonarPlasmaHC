const index_route = {}

/* render de rutas principales */
index_route.render_body = (req, res) => {
	res.render('body');
}

index_route.render_entrevista_dinamica = (req, res) => {
	res.render('entrevista_dinamica');
}

index_route.render_iniciar_sesion = (req, res) => {
	res.render('iniciar_sesion');
}

module.exports = index_route;