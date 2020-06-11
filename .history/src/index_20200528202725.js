const morgan = require ('morgan'); 
const express = require ('express');// requiero express
const app = express(); //ejecuto express y lo guardo en constante app 
require(/routes/task.routes);
// Settings

app.set('port', process.env.PORT || 3000); //asignamos el puerto

// Middlewares
app.use(morgan('dev'));
app.use(express.json()); 
// Routes 

// Static files



//Pongo a escuchar al server en el puerto 3000
//Starting the server
app.listen(app.get('port'),()=> {
    console.log(`Server on port ${app.get('port')}`); 
});


