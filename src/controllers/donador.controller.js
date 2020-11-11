const donador_route = {}

donador_route.agregar_donador = (req, res) => {
    console.log(req.body.nombre);
}

module.exports = donador_route;