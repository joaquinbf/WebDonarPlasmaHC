const helpers = {};

 helpers.estaAutorizado = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  /*req.flash('error_msg', 'no autorizado.');*/
  res.redirect('/usuario/iniciarSesion');
};

 module.exports = helpers;