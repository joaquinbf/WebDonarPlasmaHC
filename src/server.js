const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const config = require("./config/passport")

/*CONFIGURACION*/
/* establecer la carpeta views como carpeta de interfaces graficas */
app.set("views", path.join(__dirname, "views"));
/* configurar el motor de renderizado */
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main" /* plantilla principal */,
    layoutsDir: path.join(
      app.get("views"),
      "layouts"
    ) /* carpeta de plantilla */,
    partialsDir: path.join(
      app.get("views"),
      "partials"
    ) /*carpeta de porciones de codigo */,
    extname: ".hbs" /* extension de los archivos */,
  })
);
/*seteamos el motor de renderizado */
app.set("view engine", ".hbs");

/* Middlewares */
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secret",
    resave: "true",
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
/*variables globales*/
app.use((req, res, next) => {
  res.locals.mensaje = req.flash("mensaje");
  res.locals.mensajes = req.flash("mensajes");
	res.locals.error = req.flash('error');
	res.locals.errores = req.flash('errores');
  next();
});

/*ruteo*/
app.use(require("./routes/index.route.js"));
app.use(require("./routes/donador.route.js"));
app.use(require("./routes/usuario.route.js"));

/*carpeta publica */
app.use("/public", express.static(path.join(__dirname, "public")));

module.exports = app;
