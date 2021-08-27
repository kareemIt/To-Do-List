import react from 'react';
import './style.css';

const toDolistComponent = () => {
  const [count, setCount] = useState(0);
  const inputEl = document.querySelector('input');
  let list = [];
  //add the to list stuff in there
  console.log(inputEl);
  return (
    <div className="innerListContainer">
      <div className="indivualTask">
        {list.map()
        //map all the values from what the userput
        }
        <div className="removeTask">
          <h1>X</h1>
        </div>
      </div>
    </div>
  );
};
export default toDolistComponent;
