const getAllTasks = (req, res) => {
    res.send('All tasks from the list')
}

const createTask = (req, res) => {
    res.json(req.body)
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