const mongoose = require ('mongoose'); 
const URI = 'mongodb://localhost/mern-tasks';

constructor() {
    useUnifiedTopology: true;
};

mongoose.connect(URI).then(db => console.log('DB connected!'))
.catch(err => console.log(err));
                    


module.exports = mongoose; 