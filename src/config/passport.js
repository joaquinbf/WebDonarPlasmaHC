const passport = require('passport'); 
const LocalStrategy = require('passport-local').Strategy;
const Usuario = require ('../models/Usuario');

passport.use(new LocalStrategy({
  usernameField: 'user'
}, async (user, password, done) => {
  // Match Email's User
  const user = await User.findOne({user: user});
  if (!user) {
    return done(null, false, { message: 'Nombre de usuario o contraseña incorrecto.' });
  } else {
    // Match Password's User
    const match = await user.comparar_password(password);
    if(match) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Nombre de usuarios o contraseña incorrecto'});
    }
  }
}));

 

passport.serializeUser((user, done) => {
  done(null, user.id);
});

 

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});