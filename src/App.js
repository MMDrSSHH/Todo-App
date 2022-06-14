import React from 'react';
import styles from "./App.module.css";
import TodoMaker from './components/TodoMaker';
import Todos from './components/Todos';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className={styles.appTodo}>
      <h1 className={styles.appHeader}>TODO APP</h1>
      <TodoMaker />
      <Todos />
    </div>
  );
}

export default App;
