import React from 'react';
import TodoList from './TodoList.js';

const App = () => {
  return (
    <>
      <input type="text" />
      <button>タスクを追加</button>
      <button>完了したタスクを削除</button>
      <TodoList />
    </>
  );
};

export default App;
