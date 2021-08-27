import React from 'react';
import './style.css';

export default function App() {
  function SubmitInfo() {
    const buttonEl = document.querySelector('sumbitInfo');
    const inputEl = document.querySelector('input');
    buttonEl.addEventListener('submit', () => {});
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="toDoList">{/* add comp here later  */}</div>
      <div className="inputInfoContainer">
        <h1>write stuff here</h1>
        <input type="text" />
        <button type="button" onClick="SubmitInfo">
          Submit
        </button>
      </div>
    </div>
  );
}
