const index_route = {}

index_route.render_body = (req, res) => {
	res.render('body');
}

index_route.render_entrevista_dinamica = (req, res) => {
	res.render('entrevista_dinamica');
}

module.exports = index_route;