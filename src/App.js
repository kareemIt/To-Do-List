import React, { useState } from 'react';
import ToDoListComponent from './component/ToDoListItems';
import './style.css';

export default function App() {
  const [userInput, setUserInput] = useState('');
  const [toDo, setToDo] = useState([]);

  function SubmitInfo() {
    if (userInput != '') {
      setToDo(toDo.concat(userInput));
      setUserInput('');
    }
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="to-do-list">
        <ToDoListComponent toDoList={toDo} setToDo={setToDo} />
      </div>
      <div className="inputInfoContainer">
        <h1>Input Tasks</h1>
        <input
          value={userInput}
          type="text"
          onChange={e => {
            setUserInput(e.target.value);
          }}
        />
        <button type="button" onClick={SubmitInfo}>
          Submit
        </button>
      </div>
    </div>
  );
}
