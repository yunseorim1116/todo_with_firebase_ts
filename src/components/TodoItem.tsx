import React from "react";
import { TodoType } from "./../type/todoType";
interface IProps {
  todo: TodoType;
}
const TodoItem = ({ todo }: IProps) => {
  return (
    <>
      <div>{todo.content}</div>
      <br />
    </>
  );
};

export default TodoItem;
