import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import React from "react";
import "./App.css";
import { useLocalStorage } from "./useLocalStorage";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Tomar curso de React", completed: false },
//   { text: "Llamar al medico", completed: true },
//   { text: "Llamar a la abuela", completed: true },
// ];
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));

// localStorage.removeItem('TODOS_V1');

function App() {
    
  const [todos, setTodos] = useLocalStorage('TODOS_V1',[]);

  const [searchValue, setSearchValue] = React.useState("");
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


  //Funcion que actualiza el estado
  const completeTodo = (text)=>{
    const newtodos = [...todos];
    const todoIndex = newtodos.findIndex((todo) => todo.text === text);
    newtodos[todoIndex].completed = !newtodos[todoIndex].completed;
    setTodos(newtodos);
  };

  //Funcion para borrar todos
  const deleteTodo = (text)=>{
    const newtodos = [...todos];
    const todoIndex = newtodos.findIndex((todo) => todo.text === text);
    newtodos.splice(todoIndex, 1);
    setTodos(newtodos);
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
