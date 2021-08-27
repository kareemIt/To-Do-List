import React, { useState } from 'react';
import ToDoListComponent from './component/ToDoListItems';
import './style.css';

export default function App() {
  const [userInput, setUserInput] = useState('');
  const [toDo, setToDo] = useState([]);
  function SubmitInfo() {
    setToDo(toDo.concat(userInput));
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="to-do-list">
        <ToDoListComponent toDoList={toDo} />
      </div>
      <div className="inputInfoContainer">
        <h1>write stuff here</h1>
        <input
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
