const express = require ( 'express');
const routes = express.Router(); // este metodo devuelve un objeto del cual voy a poder ingresar rutas. 

routes.get('/', (req,res) => {
    res.send('API WORKS!'); 
});


module.exports = routes;