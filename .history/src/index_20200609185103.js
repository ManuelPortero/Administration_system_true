const morgan = require ('morgan'); 
const express = require ('express');// requiero express
const app = express(); //ejecuto express y lo guardo en constante app 
const path = require('path');
const {mongoose} = require('./database');
const Task = require ('./models/task'); 
const TaskRouter = require('./routes/task.routes');
const CustomerRouter = require('./routes/customer.routes');
const EmployeeRouter = require('./routes/employee.routes');
const Employee = require('./models/employee');
const Customer = require('./models/customer');

// Settings

app.set('port', process.env.PORT || 3000); //asignamos el puerto

// Middlewares
app.use(morgan('dev'));
app.use(express.json()); 
// Routes 
app.use('/api/tasks',require ('./routes/task.routes'));
app.use('/api/employee',require ('./routes/employee.routes'));
app.use('/api/customer',require ('./routes/customer.routes'));

// Static files
//app.use(express.static());

app.use(express.static(path.join(__dirname,'public')));

//Pongo a escuchar al server en el puerto 3000
//Starting the server

app.listen(app.get('port'),()=> {
    console.log(`Server on port ${app.get('port')}`); 
});

