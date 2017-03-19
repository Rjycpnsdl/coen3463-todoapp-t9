let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//schema for todolist items

const todoSchema = new Schema({
    name:{
        type: String,
        required: [true,"Todo is empty"]
    },
    user:{
        type: Schema.Types.ObjectId, ref: 'User',
        required: [true,"User undefined"]
    },
    completeDate: {type: Date, default: null},
    isCompleted: {type: Boolean, default: false}
    createDate: {type: Date},
},
    { collection: 'todo' });    // name of collection for database


module.exports = mongoose.model('Todo', todoSchema);