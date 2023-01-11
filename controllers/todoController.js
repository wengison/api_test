const Todo = require('../models/todoSchema')

//get all
const getAll = async (req, res) => {
    const todos = await Todo.find({})
    res.status(200).json(todos)
}

//create one
const createTodo = async (req, res) => {
    const text = req.body.text
    let done = ''
    if(req.body.done) {
        done = req.body.done
        console.log(done)
    }
    const todo = await Todo.create({text, done})
    res.status(200).json(todo)
}

module.exports = {getAll, createTodo}