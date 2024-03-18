import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm() {
    const {setOpenModal} = React.useContext(TodoContext);
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            setOpenModal(false);
        }}>
        <label>Añade un nuevo TODO</label>
        <textarea placeholder="Escribe tu TODO"></textarea>
        <div className="TodoForm-buttonContainer">
            <button className="TodoForm-button TodoForm-button--add">
                <span className="button_top"> 
                    Añadir
                </span>
            </button>
            <button className="TodoForm-button TodoForm-button--cancel" >
                <span className="button_top"> 
                    Cancelar 
                </span>
            </button>
        </div>
        </form>
    );
}

export {TodoForm};
