import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complated} readOnly />
      </label>
      <p>{todo.name}</p>
    </div>
  );
};

export default Todo;
