import React, { useState } from 'react';
import styles from "./App.module.css";
import TodoMaker from './components/TodoMaker';
import Todos from './components/Todos';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // Filter for todo list
  const [filterValue, setFilterValue] = useState("ALL");
  return (
    <div className={styles.appTodo}>
      <h1 className={styles.appHeader}>TODO APP</h1>
      <TodoMaker setFilterValue={setFilterValue} filterValue={filterValue} />
      <Todos filterValue={filterValue} />
    </div>
  );
}

export default App;
