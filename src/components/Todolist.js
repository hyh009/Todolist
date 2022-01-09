import React from "react";
import Todoitems from "./Todoitem";

const Todolist = ({ todos, setTodos, filteredTodos, isDarkMode }) => {
  return (
    <div className="todoContainer">
      <ul className="todolist">
        {filteredTodos?.map((todo) => (
          <Todoitems
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
            todos={todos}
            isDarkMode={isDarkMode}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
