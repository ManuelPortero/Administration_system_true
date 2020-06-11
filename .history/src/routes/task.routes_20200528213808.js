const express = require ( 'express');
const router = express.Router(); // este metodo devuelve un objeto del cual voy a poder ingresar rutas. 
const Task = require('../models/task');

router.get('/',(req,res) => {
        Task.find.then(data => console.log(data))
        .catch(err => console.log(err))
    
});



module.exports = router;