import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = ({ setIsDarkMode, isDarkMode }) => {
  const today = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = days[today.getDay()];
  const month = months[today.getMonth()];
  const date = `${today.getFullYear()} ${month} ${today.getDate()} ${day}`;
  return (
    <div className="header">
      <div
        className={`modeContainer ${isDarkMode ? "isDark" : ""}`}
        onClick={() => setIsDarkMode((prev) => !prev)}
      >
        <FontAwesomeIcon
          icon={faSun}
          style={{
            color: "#FFBF00",
            fontSize: "18px",
          }}
        />
        <FontAwesomeIcon
          icon={faMoon}
          style={{
            color: "#FFBF00",
            fontSize: "18px",
          }}
        />
      </div>
      <h1 className="title">My Todo List</h1>

      <span className="time">{date}</span>
    </div>
  );
};

export default Header;
