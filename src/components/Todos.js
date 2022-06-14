import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Todo from './Todo';


// Css styles
import styles from './Todos.module.css';

const Todos = () => {
    const { todos } = useSelector(state => state.todo);
    const reduxDispatch = useDispatch();

    return (
        <div className={styles.todosContainer}>
            {
                todos.map(todo => {
                    const { id } = todo;
                    return (
                        <Todo
                            key={id}
                            todo={todo}
                            dispatch={reduxDispatch}
                        />
                    )
                })
            }
        </div>
    );
}

export default Todos;