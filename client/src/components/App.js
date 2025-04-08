import React, { useState, useEffect } from 'react';
import TodoForm from './ToDoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos on component mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('/api/todos');
        
        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }
        
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching todos:', error);
        setError('Failed to load todos. Please try again later.');
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Add a new todo
  const addTodo = async (text) => {
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('Failed to add todo');
      }

      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error('Error adding todo:', error);
      setError('Failed to add todo. Please try again.');
    }
  };

  // Toggle todo completion status
  const toggleTodo = async (id) => {
    try {
      const todo = todos.find(todo => todo.id === id);
      const response = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !todo.completed }),
      });

      if (!response.ok) {
        throw new Error('Failed to update todo');
      }

      const updatedTodo = await response.json();
      setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
    } catch (error) {
      console.error('Error toggling todo:', error);
      setError('Failed to update todo. Please try again.');
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }

      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
      setError('Failed to delete todo. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      
      <TodoForm addTodo={addTodo} />
      
      {loading ? (
        <p>Loading todos...</p>
      ) : (
        <TodoList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      )}
    </div>
  );
};

export default App;