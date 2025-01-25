import React, { useState } from 'react';
import TodoList from './TodoList.js';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: 'ご飯を作る', complated: true },
    { id: 2, name: 'ご飯を食べる', complated: true },
  ]);
  return (
    <>
      <input type="text" />
      <button>タスクを追加</button>
      <button>完了したタスクを削除</button>
      <div>残りのタスク：</div>
      <TodoList todos={todos} />
    </>
  );
};

export default App;
