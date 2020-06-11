const express = require ('express');// requiero express
const app = express(); //ejecuto express y lo guardo en constante app 

app.listen(3000,()=> {
    console.log('server on port 3000'); 

});