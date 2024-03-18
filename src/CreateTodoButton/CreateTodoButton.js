import React from "react";
import './CreateTodoButton.css'
import { FaPlus } from "react-icons/fa";

import { TodoContext } from "../TodoContext/TodoContext";
function CreateTodoButton() {
  const {openModal,setOpenModal } = React.useContext(TodoContext);
  return (
  <button className="CreateTodoButton" 
  onClick = {
    (event) => {
      setOpenModal(!openModal);
    }
  }>
    <FaPlus />
    </button>
  );
}

export {CreateTodoButton};
