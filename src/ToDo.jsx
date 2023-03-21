import React from "react";
import { useState } from "react";
import "./ToDo.css";
const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [count, setCount] = useState(0);
  function addaction(e) {
    e.preventDefault();
    if(inputValue!=' '){
      setToDoList([...toDoList, inputValue])
    }
    setInputValue(" ");
  }

  function handleCountFuncton(e) {
    if (e.target.checked) {
      setCount(count  + 1);
    } else {
      setCount(count - 1);
    }
  }
  return (
    <div>
        <div className="tasksList">
          <p className="title">To Do List</p>
          <p className="description">Type and press the enter button</p>
      <form onSubmit={addaction}>
        <input
          className="addToDoInput"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
          {
            <ul>
              {toDoList.map((item, i) => {
                return (
                  <li key={i}>
                    <span className="InputValue">{item}</span>
                    <input
                    className="ckeckboxInput"
                      type="checkbox"
                      onChange={(e) => handleCountFuncton(e)}
                    />
                  </li>
                );
              })}
            </ul>
          }
          <p className="count">
            {count}/{toDoList.length}
          </p>
      </form>
        </div>
    </div>
  );
};

export default ToDo;
