import React from "react";
import "./App.css";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Tomar curso de React", completed: false },
//   { text: "Llamar al medico", completed: true },
//   { text: "Llamar a la abuela", completed: true },
// ];
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));



function App() {
    
  const {item: todos, saveItem: setTodos, loading, error} = useLocalStorage('TODOS_V1',[]);

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
    <AppUI
      loading={loading}
      error={error}
      deleteTodo={deleteTodo}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
    />
  );
}

export default App;