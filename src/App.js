import React, { useState } from 'react';
import ToDoList from './component/ToDoListItems';
import './style.css';

export default function App() {
  const [userInput, setUserInput] = useState('');
  const [toDo, setToDo] = useState([]);

  function submitInfo() {
    if (userInput == '') return;

    setToDo(toDo.concat(userInput));
    setUserInput('');
  }

  function handleUserInput(e) {
    setUserInput(e.target.value);
  }

  function handleRemoveItem(index) {
    setToDo(toDo.filter((_todo, i) => i != index));
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="to-do-list">
        <ToDoList toDoList={toDo} onRemoveItem={handleRemoveItem} />
      </div>
      <div className="inputInfoContainer">
        <h1>Input Tasks</h1>
        <input value={userInput} type="text" onChange={handleUserInput} />
        <button type="button" onClick={submitInfo}>
          Submit
        </button>
      </div>
    </div>
  );
}
