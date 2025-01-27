import React, { useState, useRef } from 'react';
import TodoList from './TodoList.js';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: 'ご飯を作る', complated: true },
    { id: 2, name: 'ご飯を食べる', complated: true },
  ]);

  const todoNameRef = useRef();

  const addTodo = () => {
    const name = todoNameRef.current.value;
    setTodos((prevTodo) => {
      return [...prevTodo, { id: 3, name: name, complated: false }];
    });
    todoNameRef.current.value = null;
  };
  return (
    <>
      <input type="text" ref={todoNameRef} />
      <button onClick={addTodo}>タスクを追加</button>
      <button>完了したタスクを削除</button>
      <div>残りのタスク：</div>
      <TodoList todos={todos} />
    </>
  );
};

export default App;
