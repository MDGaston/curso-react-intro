import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";
import "./App.css";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Tomar curso de React", completed: false },
//   { text: "Llamar al medico", completed: true },
//   { text: "Llamar a la abuela", completed: true },
// ];
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));

// localStorage.removeItem('TODOS_V1');


function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos =  JSON.parse(localStorageTodos);
  }

  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(parsedTodos);

  //Contador de todos completados
  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  //Busqueda de todos
  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  //Funcion que actualiza el estado y LocalStorage
  const saveTodos = (newTodos)=>{
    localStorage.setItem('TODOS_V1',JSON.stringify(newTodos));
    setTodos(newTodos); 
  }

  //Funcion que actualiza el estado
  const completeTodo = (text)=>{
    const newtodos = [...todos];
    const todoIndex = newtodos.findIndex((todo) => todo.text === text);
    newtodos[todoIndex].completed = !newtodos[todoIndex].completed;
    saveTodos(newtodos);
  };

  //Funcion para borrar todos
  const deleteTodo = (text)=>{
    const newtodos = [...todos];
    const todoIndex = newtodos.findIndex((todo) => todo.text === text);
    newtodos.splice(todoIndex, 1);
    saveTodos(newtodos);
  }

  console.log("los usuario escriben: ", searchValue);

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete = {()=>completeTodo(todo.text)}
            onDelete = {()=>deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {<CreateTodoButton />}
    </>
  );
}

export default App;
