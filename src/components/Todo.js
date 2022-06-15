import React, { useState } from 'react';
import { completeTodo, uncompleteTodo, removeTodo, star, unStar } from '../redux/todo/todoSlice';
import { Collapse } from 'react-bootstrap';

// Icons
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

// Css styles
import styles from "./Todo.module.css";

const Todo = ({ dispatch, todo }) => {
    const [expandDesc, setExpandDesc] = useState(false);
    return (
        <div className={`${styles.todoContainer} ${todo.isComplete ? styles.completed : ""}`}>
            <span className={styles.taskTitle}>{todo.todoText}</span>

            <button
                className={`${styles.desButon} ${expandDesc ? styles.collapse : ""}`}
                onClick={() => setExpandDesc(!expandDesc)}
            >
            Description
            </button>
            <Collapse in={expandDesc}>
                <p className={styles.taskDescription}>
                    {todo.todoDescription}
                </p>
            </Collapse>
            <div className={styles.buttonsContainer}>
                <button
                    onClick={() => dispatch(removeTodo(todo))}
                    className={styles.ButtonWrapper}
                >
                    <div
                        className={styles.todoButton}
                    >
                        Remove Todo
                        <span className={styles.buttonIcon}>
                            <DeleteForeverOutlinedIcon />
                        </span>
                    </div>
                </button>
                {
                    !todo.isComplete ?
                        <button
                            onClick={() => dispatch(completeTodo(todo))}
                            className={styles.ButtonWrapper}
                        >
                            <div
                                className={styles.todoButton}
                            >
                                Complete
                                <span className={styles.buttonIcon}>
                                    <CheckCircleOutlineOutlinedIcon />
                                </span>
                            </div>
                        </button> :
                        <button
                            onClick={() => dispatch(uncompleteTodo(todo))}
                            className={styles.ButtonWrapper}
                        >
                            <div
                                className={styles.todoButton}
                            >
                                Uncomplete
                                <span className={styles.buttonIcon}>
                                    <CancelOutlinedIcon />
                                </span>
                            </div>
                        </button>
                }
            </div>
            {
                !todo.isStard ?
                    <span
                        className={styles.todoStarButton}
                        onClick={() => dispatch(star(todo))}
                    >
                        <StarOutlineOutlinedIcon />
                    </span> :
                    <span
                        className={styles.todoStarButton}
                        onClick={() => dispatch(unStar(todo))}
                    >
                        <StarOutlinedIcon />
                    </span>
            }
        </div>
    );
}

export default Todo;