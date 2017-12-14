const express = require('express');
const router = express.Router();

let todos_initial_array = [
    {
      id: 1,
      title: 'Todo 1',
      complete: false,
      subTasks: []
    },
    {
      id: 2,
      title: 'Todo 2',
      complete: false,
      subTasks: []
    },
    {
      id: 3,
      title: 'Todo 3',
      complete: false,
      subTasks: []
    }
];

router.get('/', (req, res) => {
    res.status(200).json(todos_initial_array);
});

router.get('/:id', (req, res) => {
    const todo = todos_initial_array.find(todo => todo.id == req.params.id);
    if (todo)
        res.status(200).json(todo);
    else
        res.status(404).end()
});

router.post('/', (req, res) => {
    let new_todo = req.body;
    if (!new_todo.id || todos_initial_array.find(todo => todo.id == new_todo.id) || new_todo.title.length < 1)
        res.status(400).end();
    else {
        todos_initial_array.push(
            {
                id: new_todo.id,
                title: new_todo.title,
                complete: new_todo.complete || false,
                subTasks: new_todo.subTasks || []
            });
        res.status(201).json(todos_initial_array[todos_initial_array.length - 1]);
    }
});

router.put('/:id', (req, res) => {
    const indexToChange = todos_initial_array.findIndex(todo => todo.id == req.params.id);
    if(indexToChange < 0)
        res.status(400).end()
    else {
        const todo = todos_initial_array[indexToChange];
        const new_todo = req.body;
        Object.assign(todos_initial_array[indexToChange], new_todo);
        res.status(200).json(todos_initial_array[indexToChange]);
    }
});

router.delete('/:id', function (req, res) {
    const indexToDelete = todos_initial_array.findIndex(todo => todo.id == req.params.id);
    if(indexToDelete < 0)
        res.status(400).end()
    else {
        todos_initial_array.splice(indexToDelete, 1);
        res.status(200).end();
    }
});

module.exports = router;
