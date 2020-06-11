const express = require ( 'express');
const CustomerRouter = express.Router(); // este metodo devuelve un objeto del cual voy a poder ingresar rutas. 
const Employee = require('../models/employee');


router.get('/',async (req,res) => {
      const employees = await Employee.find();
      console.log(employees);
      res.json(employees);
});

router.get ('/:id', async (req,res) => {
    const employee = await Employee.findById(req.params.id); 
    res.json(employee); 
});


router.post('/', async (req,res) =>{ 
    const {title ,description} = req.body;
    const employee = new Employee({title,description}); 
    console.log(employee);
    await employee.save();
    res.json({status:'Employee saved'});
});

router.put('/:id', async (req, res) => {
    const { title, description } = req.body; 
    const newEmployee = {title, description}; 
    await Employee.findByIdAndUpdate(req.params.id, newEmployee);
    res.json({status: 'Employee Updated'});
}); 

router.delete('/:id', async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'Employee deleted'});
});

module.exports = CustomerRouter;