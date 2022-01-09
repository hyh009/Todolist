import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import ScrollToTop from "./components/ScrollToTop";
import backgroundImg from "./imgs/empty.svg";
import backgroundImgDark from "./imgs/emptyDark.svg";
import { Helmet } from "react-helmet";
function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todolists");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [filters, setFilters] = useState({});
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(
    Boolean(JSON.parse(localStorage.getItem("mode")))
  );

  useEffect(() => {
    // Filter data
    const filterdata = () => {
      if (filters) {
        const newData = todos.filter((item) =>
          Object.entries(filters).every(
            ([key, value]) => item[key]?.toString() === value || value === "all"
          )
        );
        setFilteredTodos(newData);
      } else {
        setFilteredTodos(todos);
      }
    };
    // save todos
    localStorage.setItem("todolists", JSON.stringify(todos));

    filterdata();
  }, [todos, filters]);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? "AppDark" : ""}`}>
      {isDarkMode && (
        <Helmet>
          <style>{"body { background-color: #212421; }"}</style>
        </Helmet>
      )}
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <div className="main">
        <Form
          todos={todos}
          setTodos={setTodos}
          setFilters={setFilters}
          isDarkMode={isDarkMode}
        />
        {filteredTodos.length > 0 && (
          <div className="line">{`${filteredTodos.length}/${todos.length}`}</div>
        )}
        {!filteredTodos.length > 0 && (
          <div className="background">
            <img
              className="img"
              src={isDarkMode ? backgroundImgDark : backgroundImg}
              alt=""
            />
            <span className="text">Opps! 沒有資料...</span>
          </div>
        )}
        <Todolist
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          isDarkMode={isDarkMode}
        />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
