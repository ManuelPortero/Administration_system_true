const express = require ('express');// requiero express
const app = express(); //ejecuto express y lo guardo en constante app 

// Settings

app.set('port', process.env.PORT || 3000); //asignamos el puerto

// Middlewares

// Routes 

// Static files



//Pongo a escuchar al server en el puerto 3000
//Starting the server
app.listen(4000,()=> {
    console.log('server listening on port 4000'); 
});


