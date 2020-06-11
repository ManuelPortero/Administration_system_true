const express = require ( 'express');
const router = express.Router(); // este metodo devuelve un objeto del cual voy a poder ingresar rutas. 
const Task = require('../models/task');

router.get('/',(req,res) => {
        Task.find( function (err,tasks) { 
        });    
    
});



module.exports = router;