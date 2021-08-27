import react from 'react';
import './style.css';

const ToDoListComponent = props => {
  const [count, setCount] = useState(0);
  return (
    <div className="innerListContainer">
      <div className="indivualTask">
        {
          (list.map(),
          //map all the values from what the userput
          list[count])
        }
        <div className="removeTask">
          <h1>X</h1>
        </div>
      </div>
    </div>
  );
};
export default ToDoListComponent;
