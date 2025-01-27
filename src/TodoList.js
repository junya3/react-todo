import React from 'react';
import Todo from './Todo';

function TodoList({ todos }) {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} />);
}

export default TodoList;
