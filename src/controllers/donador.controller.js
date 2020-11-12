const donador_route = {}
const Donador = require("../models/Donador")

donador_route.agregar_donador = async (req, res) => {
    console.log(req.body);
    const{nombre, apellido, telefono, email} = req.body;
    console.log(nombre, apellido, telefono, email);
    const nuevo_donador = new Donador({nombre, apellido, telefono, email})
    await nuevo_donador.save()
}

module.exports = donador_route;