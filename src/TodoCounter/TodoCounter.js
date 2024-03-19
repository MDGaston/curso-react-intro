 import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';
function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
      totalTodos === completedTodos && completedTodos!== 0  ? 

      <h1>Has completado todos los TODOS</h1> 
      :
      <h1>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
      </h1>
    );
  }

export {TodoCounter} ;
