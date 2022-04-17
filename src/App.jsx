import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaaaa", "iiiioo"]);
  const [comopleteTodos, setComopleteTodos] = useState(["uuuu"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  return (
    <>
      <div className="input-area">
        <input
          value={todoText}
          onChange={onChangeTodoText}
          placeholder="TODOを追加"
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <div>
          {incompleteTodos.map((todo) => {
            return (
              <ul key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        {comopleteTodos.map((todo) => {
          return (
            <div>
              <ul key={todo}>
                <li>{todo}</li>
                <button>戻す</button>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};
