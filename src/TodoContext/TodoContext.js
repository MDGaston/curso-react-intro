import React from "react";
import { useLocalStorage } from "../TodoContext/useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider({children}){
    const {item: todos, saveItem: setTodos, loading, error} = useLocalStorage('TODOS_V1',[]);
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

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

    //Funcion que aniade un todo
    const addTodo = (text)=>{
      const newTodos = [...todos];
      newTodos.push({
        completed: false,
        text
      });
      setTodos(newTodos);
    };
  
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
    return (
        <TodoContext.Provider 
        value={{
            loading, 
            error, 
            totalTodos, 
            completedTodos, 
            searchValue, 
            setSearchValue, 
            searchedTodos, 
            completeTodo, 
            deleteTodo, 
            todos, 
            setTodos,
            openModal,
            setOpenModal,
            addTodo
            }}>
            {children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider }