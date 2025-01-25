import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div key={todo.id}>
      {todo.id}.{todo.name}
    </div>
  );
};

export default Todo;
