const rutaIndex = {};

/* render de rutas principales */
rutaIndex.renderIndex = function (req, res) {
  res.render('index');
};

rutaIndex.renderEntrevista = function (req, res) {
  res.render('entrevista');
};

module.exports = rutaIndex;
