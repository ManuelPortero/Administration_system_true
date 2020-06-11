const express = require ( 'express');
const router = express.Router(); // este metodo devuelve un objeto del cual voy a poder ingresar rutas. 
const Task = require('../models/task');

router.get('/',async (req,res) => {
      const tasks = await Task.find();
      console.log(tasks);
});



module.exports = router;