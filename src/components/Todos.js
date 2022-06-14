import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Todo from './Todo';


// Css styles
import styles from './Todos.module.css';

const Todos = () => {
    const { todos } = useSelector(state => state.todo);
    const reduxDispatch = useDispatch();
    const [selectValue, setSelectValue] = useState("ALL");
    const [filteredTodos, setFilteredTodos] = useState(todos);

    useEffect(() => {
        console.log(selectValue);
        console.log(filteredTodos);
        switch (selectValue) {
            case "ALL":
                setFilteredTodos(todos);
                break;
            case "COMPLETED":
                setFilteredTodos(todos.filter(todo => todo.isComplete === true));
                break;
            case "UNCOMPLETED":
                setFilteredTodos(todos.filter(todo => todo.isComplete === false));
                break;
            case "STARRED":
                setFilteredTodos(todos.filter(todo => todo.isStard === true));
                break;
            default:
                setFilteredTodos(todos);
        }
    }, [selectValue, todos]);

    return (
        <div className={styles.container}>
            <select
                value={selectValue}
                onChange={(event) => setSelectValue(event.target.value)}
                className={styles.selector}
            >
                <option value="ALL">All</option>
                <option value="COMPLETED">Completed</option>
                <option value="UNCOMPLETED">Uncompleted</option>
                <option value="STARRED">Starred</option>
            </select>
            <div className={styles.todosContainer}>
                {
                    filteredTodos.map(todo => {
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
        </div>
    );
}

export default Todos;