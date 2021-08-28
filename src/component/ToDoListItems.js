import React, { useState } from 'react';
import './ToDoListItems.css';

const ToDoListComponent = props => {
  const [item, setItem] = useState([]);

  function onRemove(index) {
    toDoList.filter(e, index => {});
  }

  return (
    <div className="inner-list-container">
      <div>
        {props.toDoList.map((taskName, index) => {
          return (
            <div className="individual-task">
              {index + 1}. {taskName}
              <button className="remove-task" onClick={onRemove}>
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
