const mongoose = require ('mongoose'); 
const URITasks = 'mongodb://localhost/mern-tasks';

mongoose.connect(URITasks).then(db => console.log('DB connected!'))
.catch(err => console.log(err));
                    


module.exports = mongoose; 