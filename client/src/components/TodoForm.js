import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!text.trim()) {
      return; // Don't submit empty todos
    }
    
    addTodo(text);
    setText(''); // Clear input after submission
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit" className="submit-btn">Add</button>
    </form>
  );
};

export default TodoForm;