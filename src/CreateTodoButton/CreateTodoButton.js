import React from "react";
import './CreateTodoButton.css'
import { FaPlus } from "react-icons/fa";
function CreateTodoButton() {
  return (
  <button className="CreateTodoButton" 
  onClick = {
    (event) => {
      console.log('click')
      console.log(event)
      console.log(event.target)
    }
  }>
    <FaPlus />
    </button>
  );
}

export {CreateTodoButton};
