import React from 'react';

const Todo = ({ todo, toggleTodo }) => {
  const todoClick = () => {
    toggleTodo(todo.id);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={todoClick}
        />
      </label>
      <p>{todo.name}</p>
    </div>
  );
};

export default Todo;
