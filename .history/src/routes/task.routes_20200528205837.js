const express = require ( 'express');
const routes = express.Router(); // este metodo devuelve un objeto del cual voy a poder ingresar rutas. 
const Task = require('../models/task');
routes.get('/', (req,res) => {
        Task.find( function (en,tasks) => {
            console.log('tasks');
        });
    
    
    res.json('API WORKS!'); 
});


module.exports = routes;