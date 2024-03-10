 import './TodoCounter.css';
function TodoCounter({total, completed}){
    return (
      total === completed ? 

      <h1>Has completado todos los TODOS</h1> 
      :
      <h1>
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
    );
  }

export {TodoCounter} ;
