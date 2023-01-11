const express = require('express')
const router = express.Router()

const {getAll, createTodo} = require('../controllers/todoController')

//get all
router.get('/', getAll)

//get todo
router.get('/:id', (req, res)=> {
    res.end('test get one')
})

//create todo
router.post('/', createTodo)

//delete todo
router.delete('/:id', (req, res)=> {
    res.end('test delete one')
})

module.exports = router