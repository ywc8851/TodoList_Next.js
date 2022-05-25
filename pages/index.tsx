import { NextPage } from "next";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  { id: 1, text: "Next.js 공부하기", color: "red", checked: false },
  { id: 2, text: "React 공부하기", color: "orange", checked: false },
  { id: 3, text: "HTML 공부하기", color: "blue", checked: false },
  { id: 4, text: "CSS 공부하기", color: "navy", checked: true },
  { id: 5, text: "Javascript 공부하기", color: "green", checked: false },
];

const app: NextPage = () => {
  return <TodoList todos={todos} />;
};

export default app;
