const Task = require('../models/Task')

const getAllTasks = (req, res) => {
    res.send('All tasks from the list')
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })

    }catch (error){
       res.status(500).json({msg: error})
    }
}  
const getTask = (req, res) => {
    res.json({id: req.params.id})
}
const updateTask = (req, res) => {
    res.send('Modify a task from the list')
}
const deleteTask = (req, res) => {
    res.send('delete a  task from the list')
}


module.exports = { 
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}