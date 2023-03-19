import React, { useState } from "react";
import { TodoType } from "./../type/todoType";
import { createId } from "./../utils/createId";
interface IProps {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    newTodo: TodoType
  ) => void;
}
function TodoInput({ handleSubmit }: IProps) {
  const initalTodoValue = {
    content: "",
    id: "",
    completed: false,
  };
  const [todo, setTodo] = useState<TodoType>(initalTodoValue);

  const handleTodoValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const todoInfo = {
      content: e.target.value,
      id: createId(),
      completed: false,
    };
    setTodo(todoInfo);
  };
  const handleTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e, todo);
    setTodo(initalTodoValue);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleTodoSubmit(e);
        }}
      >
        <input
          value={todo.content}
          onChange={(e) => {
            handleTodoValue(e);
          }}
        />
        <button>등록</button>
      </form>
    </>
  );
}

export default TodoInput;
