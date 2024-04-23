const express = require('express');
const router = require("../router/product.router");
const morgan = require("morgan")

const app = express();

app.use(morgan("dev")); // Debe ir antes de todas las rutas en uso 

app.get('/', (req, res) => {
    res.send("Esta es una API con ORM Sequelize");
});

// Se le indica que pueda leer json - Debe ir antes de la ruta a trabajar 
app.use(express.json());

// Se le indica en qué ruta se va a trabajar 
app.use("/api/v1", router);


module.exports = app; 
