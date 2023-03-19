import React from "react";
import { TodoType } from "./../type/todoType";
interface IProps {
  todoList: TodoType[];
}
const TodoList = ({ todoList }: IProps) => {
  return (
    <>
      {todoList.map((todo: TodoType) => {
        return (
          <>
            <span>{todo.content}</span>
            <br />
          </>
        );
      })}
    </>
  );
};

export default TodoList;
