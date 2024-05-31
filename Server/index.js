const express = require('express')
const mongoose  = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Model/todo')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/TodoList')
.then(() => console.log("Mongoose Connected..."))
.catch((err) => console.error("Mongoose Connection Error",err));

//require routes
const createTaskRoutes = require('./Routes/TodoRoutes')
app.use('/api',createTaskRoutes);
app.use('/api',createTaskRoutes);
app.use('/api',createTaskRoutes);
app.use('/api',createTaskRoutes);

app.listen(4000, ()=> {
    console.log("Server is Running on 4000");
})