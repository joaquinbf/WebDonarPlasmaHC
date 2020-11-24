const donador_route = {};
const Donador = require("../models/Donador");

donador_route.agregar_donador = async (req, res) => {
  console.log(req.body);
  const { nombre, apellido, telefono, email, tipo_donador } = req.body;
  const errors = [];


  if (!nombre) {
    errors.push({ text: "Porfavor ingresa el nombre" });
  }
  if (!apellido) {
    errors.push({ text: "Porfavor ingresar Apellido" });
  }
  if (!telefono) {
    errors.push({ text: "Porfavor ingresar numero de telefono" });
  }
  if (!email) {
    errors.push({ text: "Porfavor ingresar email" });
  }
  if (!tipo_donador) {
    errors.push({ text: "Profavor ingresar su tipo" });
  }
  if (errors.length > 0) {
    console.log("Exploto")
  }else{
    const nuevo_donador = new Donador({
      nombre,
      apellido,
      telefono,
      email,
      tipo_donador,
    });
      await nuevo_donador.save();
  }

};
donador_route.listar_donadores = async (req, res) => {
  const donadores = await Donador.find({}).lean();
  res.render("listado_donadores", { donadores });
};
donador_route.render_agregar_donador = (req, res) => {
  res.render("formulario_contacto_entrevista");
};
module.exports = donador_route;
