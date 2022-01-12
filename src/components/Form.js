import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuid_v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import categoriesIcons from "../categoriesIcons";
import {
  faPlusSquare,
  faFilter,
  faBorderAll,
} from "@fortawesome/free-solid-svg-icons";

const Form = ({ setTodos, todos, setFilters, isDarkMode }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const getInitialCatActive = () => {
    const initialValue = [false];
    Object.keys(categoriesIcons).forEach((_) => initialValue.push(false));
    return initialValue;
  };
  const [showInput, setShowInput] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [catActive, setCatActive] = useState(getInitialCatActive());
  const [statusActive, setStatusActive] = useState(getInitialCatActive());

  const handleFilters = (e, name = "", value = "", index = null) => {
    if (name === "category") {
      setCatActive((catActive) =>
        catActive.map((active, idx) =>
          idx === index ? (active = true) : (active = false)
        )
      );
      setFilters((prev) => ({ ...prev, [name]: value }));
    } else if (name === "completed") {
      setStatusActive((statusActive) =>
        statusActive.map((active, idx) =>
          idx === index ? (active = true) : (active = false)
        )
      );
      setFilters((prev) => ({ ...prev, [name]: value.toString() }));
    } else {
      setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSort = (e) => {
    e.preventDefault();
    let sortTodos = [...todos];
    if (e.target.value === "close") {
      sortTodos.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else {
      sortTodos.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setTodos(sortTodos);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    window.confirm("確定刪除所有清單嗎？") && setTodos([]);
  };
  const onSubmit = (input) => {
    setTodos([...todos, { ...input, completed: false, id: uuid_v4() }]);
    reset({ todo: "", category: "", date: "" });
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="iconContainer largeIcon">
        <div
          className="icon iconGrid"
          onClick={() => {
            setShowInput((prev) => !prev);
          }}
        >
          <FontAwesomeIcon
            icon={faPlusSquare}
            style={{
              color: "black",
              fontSize: "24px",
            }}
          />
          <span className="small">新增</span>
        </div>
        <div
          className="icon"
          onClick={() => {
            setShowFilters((prev) => !prev);
          }}
        >
          <FontAwesomeIcon
            icon={faFilter}
            style={{
              color: "black",
              fontSize: "22px",
            }}
          />
          <span className="small">篩選</span>
        </div>
      </div>

      <div className={`inputContainer ${showInput ? "show" : ""}`}>
        <input
          type="text"
          name="todo"
          placeholder="輸入待辦事項(20字內)..."
          className="InputTodo text"
          {...register("todo", {
            required: "請填入待辦事項",
            maxLength: { value: 20, message: "待辦事項不能超過20字" },
          })}
        />
        <select
          name="category"
          className="category"
          {...register("category", {
            required: "請選擇分類",
          })}
        >
          <option value="">選擇分類</option>
          <option value="work">工作</option>
          <option value="read">閱讀</option>
          <option value="watch">影片</option>
          <option value="exercise">運動</option>
          <option value="others">其他</option>
        </select>
        <input
          name="date"
          className="InputTodo date"
          placeholder="mm/dd/yyyy"
          type="text"
          onFocus={(e) => (e.target.type = "date")}
          {...register("date", {
            required: "請選擇完成期限",
            onBlur: (e) => (e.target.type = "text"),
          })}
        />
        <button className="addTodo">
          <FontAwesomeIcon
            icon={faPlusSquare}
            style={{
              color: "limegreen",
              fontSize: "36px",
            }}
          />
        </button>
      </div>
      <div className="errorContainer">
        {errors.todo && <span className="error">{errors.todo.message}</span>}
        {errors.category && (
          <span className="error">{errors.category.message}</span>
        )}
        {errors.date && <span className="error">{errors.date.message}</span>}
      </div>
      <div className={`iconContainer hide ${showFilters ? "show" : ""}`}>
        <div
          className="icon status"
          style={{
            background:
              isDarkMode && statusActive[0]
                ? "#270557"
                : isDarkMode && !statusActive[0]
                ? "black"
                : statusActive[0]
                ? "teal"
                : "#545454",
          }}
          onClick={(e) => {
            handleFilters(e, "completed", "all", 0);
          }}
        >
          <span className="small">全部</span>
        </div>
        <div
          className="icon status"
          style={{
            background:
              isDarkMode && statusActive[1]
                ? "#270557"
                : isDarkMode && !statusActive[1]
                ? "black"
                : statusActive[1]
                ? "teal"
                : "#545454",
          }}
          onClick={(e) => {
            handleFilters(e, "completed", false, 1);
          }}
        >
          <span className="small">待完成</span>
        </div>
        <div
          className="icon status"
          style={{
            background:
              isDarkMode && statusActive[2]
                ? "#270557"
                : isDarkMode && !statusActive[2]
                ? "black"
                : statusActive[2]
                ? "teal"
                : "#545454",
          }}
          onClick={(e) => {
            handleFilters(e, "completed", true, 2);
          }}
        >
          <span className="small">完成</span>
        </div>
      </div>
      <div className={`iconContainer hide ${showFilters ? "show" : ""}`}>
        <div
          className="icon"
          title="all"
          onClick={(e) => {
            handleFilters(e, "category", "all", 0);
          }}
        >
          <FontAwesomeIcon
            icon={faBorderAll}
            style={{
              color:
                isDarkMode && catActive[0]
                  ? "white"
                  : isDarkMode
                  ? "#c270e2"
                  : catActive[0]
                  ? "black"
                  : "gray",
              fontSize: "30px",
            }}
          />
        </div>
        {Object.entries(categoriesIcons).map(([category, value], index) => (
          <div
            className="icon"
            key={uuid_v4()}
            title={category}
            onClick={(e) => {
              handleFilters(e, "category", category, index + 1);
            }}
          >
            <FontAwesomeIcon
              icon={value.icon}
              style={{
                color:
                  isDarkMode && catActive[index + 1]
                    ? value.colorDark
                    : isDarkMode
                    ? "#c270e2"
                    : catActive[index + 1]
                    ? value.color
                    : "gray",
                fontSize: "30px",
              }}
            />
          </div>
        ))}
      </div>
      <div className="thinContainer">
        <div className="filterContainer large">
          <select onChange={handleFilters} name="category" className="filter">
            <option value="all">分類(全部)</option>
            <option value="work">工作</option>
            <option value="read">閱讀</option>
            <option value="watch">影片</option>
            <option value="exercise">運動</option>
            <option value="others">其他</option>
          </select>
          <select onChange={handleFilters} name="completed" className="filter">
            <option value="all">狀態(全部)</option>
            <option value={true}>完成</option>
            <option value={false}>待完成</option>
          </select>
        </div>
        <div className="filterContainer">
          <select onChange={handleSort} name="completed" className="filter">
            <option value="">依時間排序</option>
            <option value="close">日期最近</option>
            <option value="far">日期最遠</option>
          </select>
          <button onClick={handleRemove} className="filter Button">
            清空清單
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
