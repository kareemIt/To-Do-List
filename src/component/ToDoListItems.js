import React, { useState } from 'react';
import './ToDoListItems.css';

const ToDoList = ({ toDoList, onRemoveItem }) => {
  return (
    <div className="inner-list-container">
      <div>
        {toDoList.map((taskName, index) => {
          return (
            <div className="individual-task" key={index}>
              {index + 1}. {taskName}
              <button
                className="remove-task"
                onClick={() => onRemoveItem(index)}
              >
                <span>+</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ToDoList;
