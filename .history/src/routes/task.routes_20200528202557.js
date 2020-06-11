const express = require ( 'express');
const routes = express.Router(); // este metodo devuelve un objeto del cual voy a poder ingresar rutas. 

router.get('/', (req,res) => {
    res.send('Hello world'); 
});


module.exports = router;