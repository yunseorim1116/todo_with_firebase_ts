import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <>
      <div>{todo.value}</div>
      <br />
    </>
  );
};

export default TodoItem;
