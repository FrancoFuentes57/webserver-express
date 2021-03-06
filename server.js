const express = require("express");
const app = express();
const hbs = require("hbs");
require("./hbs/helpers");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

//Express HBS engine
hbs.registerPartials(__dirname + "/views/parciales");
app.set("view engine", "hbs");

//Get de Paginas
app.get("/", (req, res) => {
    res.render("home", {
        nombre: "blanca martinez",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        nombre: "Franco Fuentes",
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});