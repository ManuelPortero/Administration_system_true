const express = require ( 'express');
const EmployeeRouter = express.Router(); // este metodo devuelve un objeto del cual voy a poder ingresar rutas. 
const Employee = require('../models/employee');


EmployeeRouter.get('/',async (req,res) => {
      const employees = await Employee.find();
      console.log(employees);
      res.json(employees);
});

EmployeeRouter.get ('/:id', async (req,res) => {
    const employee = await Employee.findById(req.params.id); 
    res.json(employee); 
});


EmployeeRouter.post('/', async (req,res) =>{ 
    const {name,surname,telephone,email,company} = req.body;
    const employee = new Employee({name,surname,telephone,email,company}); 
    console.log(employee);
    await employee.save();
    res.json({status:'Employee saved'});
});

EmployeeRouter.put('/:id', async (req, res) => {
    const { title, description }{name,surname,telephone,email,company} = req.body; 
    const newEmployee = {name,surname,telephone,email,company}; 
    await Employee.findByIdAndUpdate(req.params.id, newEmployee);
    res.json({status: 'Employee Updated'});
}); 

EmployeeRouter.delete('/:id', async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'Employee deleted'});
});

module.exports = EmployeeRouter;