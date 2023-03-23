import React from "react";
import { TodoType } from "./../type/todoType";
interface IProps {
  todo: TodoType;
  handleChangeChecked: (id: string) => void;
}
const TodoItem = ({ todo, handleChangeChecked }: IProps) => {
  return (
    <>
      <input
        type="checkbox"
        checked={todo.completed}
        onClick={() => handleChangeChecked(todo.id)}
      />
      <span>{todo.content}</span>
      <br />
    </>
  );
};

export default TodoItem;
