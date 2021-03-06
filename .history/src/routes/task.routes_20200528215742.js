const express = require ( 'express');
const router = express.Router(); // este metodo devuelve un objeto del cual voy a poder ingresar rutas. 
const Task = require('../models/task');

router.get('/',async (req,res) => {
      const tasks = await Task.find();
      console.log(tasks);
      res.json(tasks);
});

router.post('/', async (req,res) =>{ 
    const {title ,description} = req.body;
    const task = new Task({title,description}); 
    console.log(task);
    await task.save();
    res.json({status:'Task saved'});
});

router.put('/:id', async (req, res) => {
    const { title, description } = req.body; 
    const newTask = {title, description}; 
    Task.findByIdAndUpdate(req.params.id);
    res.json('Received');
}); 

module.exports = router;