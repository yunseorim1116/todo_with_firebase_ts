import React from "react";
import { TodoType } from "./../type/todoType";
import TodoItem from "./TodoItem";

interface IProps {
  todoList: TodoType[];
}
const TodoList = ({ todoList }: IProps) => {
  return (
    <>
      {todoList.map((todo: TodoType) => {
        return (
          <>
            <TodoItem todo={todo} />
          </>
        );
      })}
    </>
  );
};

export default TodoList;
