const mongoose  = require("mongoose");

const TodoSchema = new mongoose.Schema({
        task : {type : String, require : true},
        done : {
                type : Boolean,
                default : false
        }
})

const TodoModel = mongoose.model('todoData', TodoSchema)
module.exports = TodoModel