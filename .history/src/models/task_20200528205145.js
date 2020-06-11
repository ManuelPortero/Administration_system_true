const mongoose = require ('mongoose'); 
const {Schema} = mongoose; 

new Schema ({ 
    title : {Type : String, required: true},
    description : {type: String, required: true}
}); 

module exports = mongoose.model ('Task, TaskSchema');