import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import categoriesIcons from "../categoriesIcons";
import {
  faTrash,
  faCheckCircle,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

const Todoitem = ({ todos, setTodos, todo, isDarkMode }) => {
  const handleStatus = (e) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const handleRemove = (e) => {
    e.preventDefault();
    setTodos(() => todos.filter((item) => item.id !== todo.id));
  };
  localStorage.setItem("todolists", JSON.stringify(todos));
  return (
    <div className="todo">
      <li className={`todoItem ${todo.completed ? "completed" : ""}`}>
        <span className="textItem">
          <FontAwesomeIcon
            icon={categoriesIcons[todo.category]?.icon || faQuestion}
            style={{
              color: isDarkMode
                ? categoriesIcons[todo.category]?.colorDark
                : categoriesIcons[todo.category]?.color,
              height: "30px",
              width: "30px",
            }}
          />
          {todo.todo}
        </span>
        <span className="dateItem">{todo.date}</span>
      </li>
      <div className="buttonContainer">
        <button className="completeBtn" onClick={handleStatus}>
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{ fontSize: "30px", color: "green" }}
          />
        </button>
        <button className="removeBtn" onClick={handleRemove}>
          <FontAwesomeIcon
            icon={faTrash}
            style={{ fontSize: "30px", color: "#CD5C5C" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Todoitem;
