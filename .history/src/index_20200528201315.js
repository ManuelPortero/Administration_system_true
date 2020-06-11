const express = require ('express');// requiero express
const app = express(); //ejecuto express y lo guardo en constante app 

// Settings

app.set('port', process.env.PORT || 3000);

// Middlewares

// Routes 

// Static files



//Pongo a escuchar al server en el puerto 3000
app.listen(3000,()=> {
    console.log('server on port 3000'); 
});


