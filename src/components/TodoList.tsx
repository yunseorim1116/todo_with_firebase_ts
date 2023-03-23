import React from "react";
import { TodoType } from "./../type/todoType";
import TodoItem from "./TodoItem";

interface IProps {
  todoList: TodoType[];
  handleChangeChecked: (id: string) => void;
}
const TodoList = ({ todoList, handleChangeChecked }: IProps) => {
  return (
    <>
      {todoList.map((todo: TodoType) => {
        return (
          <>
            <TodoItem todo={todo} handleChangeChecked={handleChangeChecked} />
          </>
        );
      })}
    </>
  );
};

export default TodoList;
