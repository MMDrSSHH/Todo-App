import React from 'react';
import { Modal } from 'react-bootstrap';

// Css styles
import styles from "./TodoModal.module.css";

const TodoModal = ({ state, formDispatch, submitHandler, error, show, setShow }) => {
    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            backdrop="static"
        >
            <div className={styles.modalContainer}>
                <div className={styles.modalTitle}>
                    Add Task You Plan To Do
                </div>
                <form>
                    <div className={styles.modalInputContainer}>
                        <input
                            maxLength="25"
                            className={styles.inputField}
                            type="text"
                            name="todoText"
                            value={state.todoText}
                            placeholder=" "
                            onChange={event => formDispatch({ type: "FORM_TODO_TASK_TITLE", payload: event.target.value })}
                        />
                        <label className={styles.inputPlaceholder}>
                            Task Title
                        </label>
                    </div>
                    <div className={`${styles.modalInputContainer} ${styles.textareaContainer}`}>
                        <textarea
                            className={styles.inputField}
                            name="todoDescription"
                            value={state.todoDescription}
                            placeholder=" "
                            onChange={event => formDispatch({ type: 'FORM_TODO_TASK_DESCRIPTION', payload: event.target.value })}
                        />
                        <label className={styles.inputPlaceholder}>
                            Task Description
                        </label>
                    </div>
                    {error.length > 0 && <p>{error}</p>}
                    <button
                        onClick={submitHandler}
                        className={styles.submitButton}
                    >
                        Add Todo
                    </button>
                </form>
            </div>
        </Modal>
    );
}

export default TodoModal;