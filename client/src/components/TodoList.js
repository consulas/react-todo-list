import React from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  if (todos.length === 0) {
    return <p>No todos yet. Add one above!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className="todo-item">
          <span 
            className={`todo-text ${todo.completed ? 'completed' : ''}`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button 
            className="delete-btn"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;