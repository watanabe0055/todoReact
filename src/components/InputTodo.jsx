import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "50px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
  lineHeight: "30px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
      <input value={todoText} onChange={onChange} placeholder="TODOを追加" />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
