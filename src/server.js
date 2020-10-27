const express = require('express');
const app = express();
const exphbs = require("express-handlebars");
const path = require('path')


/*configuracion*/
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

/*ruteo*/

app.get('/', (req, res) => {
	res.send('<h1> hello world </h1>');
})

app.get('/perfil', (req, res) => {
	res.render('body');
})




module.exports = app;