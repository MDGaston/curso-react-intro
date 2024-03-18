import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import { TodoError } from "../TodoError/TodoError";
import { TodoLoading } from "../TodoLoading/TodoLoading";
import { Modal } from "../Modal/Modal";
import { TodoContext } from "../TodoContext/TodoContext";

function AppUI() {
  const {loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext);
  return (
      
    <>
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {!loading && !error && searchedTodos.length === 0 && <EmptyTodos />}

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
      
      {openModal && (
        <Modal>
          <button onClick={() => setOpenModal(false)}>X</button>
        </Modal>
      )}
      
    </>
  )
}

export {AppUI};
