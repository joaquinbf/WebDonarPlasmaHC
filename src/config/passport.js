const passport = require('passport'); 
const LocalStrategy = require('passport-local').Strategy;
const Usuario = require ('../models/Usuario');

passport.use(new LocalStrategy({
  usernameField: 'user'
}, async (user, password, done) => {
  const usuario = await Usuario.findOne({user: user});
  if (!user) {
    return done(null, false, { message: 'Nombre de usuario o contraseña incorrecto.' });
  } else {
    const match = await usuario.comparar_password(password);
    if(match) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Nombre de usuarios o contraseña incorrecto'});
    }
  }
}));

 

passport.serializeUser((usuario, done) => {
  done(null, usuario.id);
});

 

passport.deserializeUser((id, done) => {
  Usuario.findById(id, (err, user) => {
    done(err, user);
  });
});