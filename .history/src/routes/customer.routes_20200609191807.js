const express = require ( 'express');
const CustomerRoute = express.Router(); // este metodo devuelve un objeto del cual voy a poder ingresar rutas. 
const Customer = require('../models/customer');

CustomerRoute.get('/',async (req,res) => {
      const customers = await customer.find();
      console.log(customers);
      res.json(customers);
});

CustomerRoute.get ('/:id', async (req,res) => {
    const customer = await Customer.findById(req.params.id); 
    res.json(customer); 
});


CustomerRoute.post('/', async (req,res) =>{ 
    const {title ,description} = req.body;
    const customer = new Customer({title,description}); 
    console.log(customer);
    await customer.save();
    res.json({status:'Customer saved'});
});

CustomerRoute.put('/:id', async (req, res) => {
    const { title, description } = req.body; 
    const newCustomer = {title, description}; 
    await Customer.findByIdAndUpdate(req.params.id, newCustomer);
    res.json({status: 'Customer Updated'});
}); 

CustomerRoute.delete('/:id', async (req, res) => {
    await Customer.findByIdAndRemove(req.params.id);
    res.json({status: 'Customer deleted'});
});

module.exports = CustomerRoute;