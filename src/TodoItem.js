import React from "react";
import './TodoItem.css';
import { IoCloseOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

function TodoItem(props){


    return (
      <li className = "todoItem">
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick = {props.onComplete}
        >
          <FaCheck />
        </span>
        <p className = {`todoItem_p ${props.completed && "todoItem_p--complete"}`}>{props.text}</p>
        <span className = "todoItem_delete" onClick = {props.onDelete}>
          <IoCloseOutline />
        </span>
      </li>
    );
  }

export {TodoItem};
