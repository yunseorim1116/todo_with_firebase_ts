import React, { useState } from "react";
import TodoInput from "./../components/TodoInput";
import TodoList from "./../components/TodoList";
import { TodoType } from "./../type/todoType";

const TodoConatiner = () => {
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    newTodo: TodoType
  ) => {
    e.preventDefault();
    setTodoList([...todoList, newTodo]);
  };
  return (
    <>
      <TodoInput handleSubmit={handleSubmit} />
      <TodoList todoList={todoList} />
    </>
  );
};

export default TodoConatiner;
