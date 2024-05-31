    const mongoose = require('mongoose')
    const TodoModel = require('../Model/todo')

    const createTask = async(req, res) => {
        try{
            const task = await TodoModel.create(req.body);
            console.log(task);  
            res.status(201).json({
                status : "success",
                data : task,
            });
        }catch(err){
            res.status(400).json({
                status : "fail",
                data : err
            });
        }
    };

    const updateTask = async (req, res) => {
        const { id } = req.params;
        // const { task } = req.body; // Assuming you're updating the 'task' field
    
        try {
            const updatedTodo = await TodoModel.findByIdAndUpdate({_id : id}, {done : true});
    
            if (!updatedTodo) {
                return res.status(404).json({ error: 'Todo not found' });
            }
            console.log(id);
            res.status(200).json({ data: updatedTodo });
        } catch (err) {
            console.error('Error updating todo:', err);
            res.status(500).json({ error: 'Server error' });
        }
    };
    

    const deleteTask = async (req,res) => {
        const {id} = req.params;
        try {
            const deleteTodo = await TodoModel.findByIdAndDelete(id);
    
            if (!deleteTodo) {
                return res.status(404).json({ error: 'Todo not found' });
            }
            console.log(id);
            res.status(200).json({ data: deleteTodo });
        } catch (err) {
            console.error('Error Deleteing todo:', err);
            res.status(500).json({ error: 'Server error' });
        }
    }

    const GetTask = async (req,res)=>{
        try{
            const getData = await TodoModel.find();
            if(getData){
                res.status(201).json({
                    data : getData,
                    status : "success",
                })
            }
            else
            {
                res.status(500).json({
                    data : "Empty Filed",
                    status: "Fail"
                })
            }
        }
        catch(err){
            res.status(400).json({
                message : err.message,
                status : "fail"
            })
        }
    }
    module.exports = {
        createTask,
        GetTask,
        updateTask,
        deleteTask
    }