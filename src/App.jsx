import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを追加" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <div>
          <ul>
            <li>aaa</li>
            <button>完了</button>
            <button>削除</button>
          </ul>
        </div>
      </div>
      <div>
        <p>完了のTODO</p>
        <div>
          <ul>
            <li>oooo</li>
            <button>戻す</button>
          </ul>
        </div>
      </div>
    </>
  );
};
