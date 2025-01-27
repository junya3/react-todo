import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div>
      <lebel>
        <input type="checkbox" checked={todo.complated} readOnly />
      </lebel>
      <p>{todo.name}</p>
    </div>
  );
};

export default Todo;
