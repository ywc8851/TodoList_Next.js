import { NextPage } from "next";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  { id: 1, text: "Next.js공부하기", color: "red", checked: false },
  { id: 2, text: "React공부하기", color: "orange", checked: false },
];

const app: NextPage = () => {
  return <TodoList todos={todos} />;
};

export default app;
