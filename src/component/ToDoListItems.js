import React, { useState } from 'react';
import './ToDoListItems.css';

const ToDoListComponent = props => {
  function onRemove(index) {
    props.setToDo(
      props.toDoList.filter((_, i) => {
        return index != i;
      })
    );
  }

  return (
    <div className="inner-list-container">
      <div>
        {props.toDoList.map((taskName, index) => {
          return (
            <div className="individual-task" key={index}>
              {index + 1}. {taskName}
              <button className="remove-task" onClick={() => onRemove(index)}>
                <span>+</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ToDoListComponent;
