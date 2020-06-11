const mongoose = require ('mongoose'); 
const URI = 'mongodb://localhost/mern-tasks';



mongoose.connect.useUnifiedTopology
(URI).then(db => console.log('DB connected!'))
.catch(err => console.log(err));
                    


module.exports = mongoose; 