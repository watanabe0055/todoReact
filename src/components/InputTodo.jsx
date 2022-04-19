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
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        value={todoText}
        onChange={onChange}
        placeholder="TODOを追加"
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
