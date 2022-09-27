import React from "react";
import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setInconmpleteTodos] = useState([]);
  const [completeTodos, setConmpleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setInconmpleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setInconmpleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setInconmpleteTodos(newIncompleteTodos);
    setConmpleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setConmpleteTodos(newCompleteTodos);
    setInconmpleteTodos(newIncompleteTodos);
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
          {incompleteTodos.map((todo, index) => {
            return (
              <div key="{todo}" className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>Done</button>
                <button onClick={() => onClickDelete(index)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">Completed TODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key="{todo}" className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>Back</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
