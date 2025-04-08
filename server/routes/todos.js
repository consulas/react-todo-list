const express = require('express');
const router = express.Router();

// In-memory todos array (in a real app, you'd use a database)
let todos = [
  { id: 1, text: 'Learn Express.js', completed: false },
  { id: 2, text: 'Learn React', completed: false },
  { id: 3, text: 'Build a Todo App', completed: false }
];

// Get all todos
router.get('/', (req, res) => {
  res.json(todos);
});

// Add a new todo
router.post('/', (req, res) => {
  const newTodo = {
    id: todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1,
    text: req.body.text,
    completed: false
  };
  
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo (toggle completion)
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  
  todos[todoIndex] = {
    ...todos[todoIndex],
    ...req.body
  };
  
  res.json(todos[todoIndex]);
});

// Delete a todo
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  
  todos = todos.filter(todo => todo.id !== id);
  
  res.status(200).json({ message: 'Todo deleted' });
});

module.exports = router;