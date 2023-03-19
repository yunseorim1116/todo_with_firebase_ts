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
  const [todo, setTodo] = useState<TodoType>({
    content: "",
    id: "",
    completed: false,
  });

  const handleTodoValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const todoValue = e.target.value;
    const todoInfo = { content: todoValue, id: createId(), completed: false };
    setTodo(todoInfo);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e, todo);
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
