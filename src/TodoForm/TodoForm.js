import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm() {
    const {setOpenModal, addTodo} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState("");

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = ()=>{
        setOpenModal(false);
    }

    const onchange = (event)=>{
        setNewTodoValue(event.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
        <label>Añade un nuevo TODO</label>
        <textarea 
            placeholder="Escribe tu TODO"
            value={newTodoValue}
            onChange={onchange}
        />
        <div className="TodoForm-buttonContainer">
            <button className="TodoForm-button TodoForm-button--add">
                <span className="button_top"> 
                    Añadir
                </span>
            </button>
            <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>
                <span className="button_top"> 
                    Cancelar 
                </span>
            </button>
        </div>
        </form>
    );
}

export {TodoForm};
