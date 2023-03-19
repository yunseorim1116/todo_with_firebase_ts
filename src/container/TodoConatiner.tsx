import React, { useState, useEffect } from "react";
import TodoInput from "./../components/TodoInput";
import TodoList from "./../components/TodoList";
import { TodoType } from "./../type/todoType";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
console.log(db);

const TodoConatiner = () => {
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const todoCollectionRef = collection(db, "todo");
  console.log(todoCollectionRef);

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const querySnapshot = await getDocs(todoCollectionRef);
        const todo = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          content: doc.data().content,
          completed: doc.data().completed,
        }));
        console.log(todo);
        setTodoList(todo);
      } catch (error) {
        console.log("Error getting users: ", error);
      }
    };
    getTodoList();
  }, []);

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
