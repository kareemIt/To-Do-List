import React, { useState } from 'react';
import './style.css';
import ToDoListComponent from './component/ToDoListItems';

export default function App() {
  const [userInput, setUserInput] = useState('');
  const [toDo, setToDo] = useState([]);
  function SubmitInfo() {
    setToDo(toDo.concat(userInput));
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="toDoList">{/* add comp here later  */}</div>
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
