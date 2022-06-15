import React, { useReducer, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from '../redux/todo/todoSlice';
import TodoModal from './TodoModal';

// Css styles
import styles from './TodoMaker.module.css';

const initialState = {
    todoText: "",
    todoDescription: "",
}

const formReducer = (state, action) => {
    switch (action.type) {
        case 'FORM_TODO_TASK_TITLE':
            return {
                ...state,
                todoText: action.payload,
            }

        case 'FORM_TODO_TASK_DESCRIPTION':
            // if (action.payload.charCodeAt(action.payload.length - 1) === 10) {
            //     return {
            //         ...state,
            //         todoDescription: state.todoDescription + "\n",
            //     }
            // }

            return {
                ...state,
                todoDescription: action.payload,
            }

        case 'FORM_TODO_CLEAR':
            return initialState;
        default:
            return state;
    }
}

const TodoMaker = ({ setFilterValue, filterValue }) => {
    const [state, formDispatch] = useReducer(formReducer, initialState);
    const reduxDispatch = useDispatch();
    const [modalShow, setModalShow] = useState(false);
    const { todos, error } = useSelector(state => state.todo);


    // This effect is for closing the modal
    // when there is no error
    // if an eror is encountered the modal will be still open
    useEffect(() => {
        if (!error) {
            setModalShow(false);
        } else {
            setModalShow(true);
        }
    }, [todos, error]);

    // Adds newTodo object to the todo state list
    const submitHandler = (event) => {
        event.preventDefault();
        const newTodo = {
            id: state.todoText.trim(),
            todoText: state.todoText.trim(),
            todoDescription: state.todoDescription.trim(),
            isComplete: false,
            isStard: false,
        };

        reduxDispatch(addTodo(newTodo));
        formDispatch({ type: "FORM_TODO_CLEAR" });
    }

    return (
        <div className={styles.todoMakerContainer}>
            <button
                onClick={() => setModalShow(true)}
                className={styles.todoMakerButton}
            >
                Add Task
            </button>
            <select
                value={filterValue}
                onChange={(event) => setFilterValue(event.target.value)}
                className={styles.selector}
            >
                <option value="ALL">All</option>
                <option value="COMPLETED">Completed</option>
                <option value="UNCOMPLETED">Uncompleted</option>
                <option value="STARRED">Starred</option>
            </select>
            <TodoModal
                state={state}
                formDispatch={formDispatch}
                error={error}
                submitHandler={submitHandler}
                show={modalShow}
                setShow={setModalShow}
            />
        </div>
    );
}

export default TodoMaker;