import React from "react";
import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setInconmpleteTodos] = useState(["ABC", "DEF"]);
  const [completeTodos, setConmpleteTodos] = useState(["GHI", "JKL"]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setInconmpleteTodos(newTodos);
    setTodoText("");
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="Input TODO"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>Add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">Uncompleted TODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key="{todo}" className="list-row">
                <li>{todo}</li>
                <button>Done</button>
                <button>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">Completed TODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key="{todo}" className="list-row">
                <li>{todo}</li>
                <button>Back</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
