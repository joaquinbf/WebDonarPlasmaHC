const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Usuario = require('../models/Usuario');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'user',
    },
    async function (user, password, done) {
      const usuario = await Usuario.findOne({ user: user });
      if (!usuario) {
        return done(null, false, {
          message: 'Nombre de usuario o contraseña incorrecto.',
        });
      } else {
        const match = await usuario.comparar_password(password);
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, {
            message: 'Nombre de usuarios o contraseña incorrecto',
          });
        }
      }
    }
  )
);

passport.serializeUser(function (usuario, done) {
  done(null, usuario.id);
});

passport.deserializeUser(function (id, done) {
  Usuario.findById(id, function (err, user) {
    done(err, user);
  });
});
