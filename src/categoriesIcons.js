import {
  faBriefcase,
  faRunning,
  faBookOpen,
  faPlayCircle,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

const categoriesIcons = {
  work: { icon: faBriefcase, color: "#f5433d", colorDark: "#e24f74" },
  read: { icon: faBookOpen, color: "#0b5fbe", colorDark: "#3287e7" },
  watch: { icon: faPlayCircle, color: "#4b02c0", colorDark: "#7a2ff3" },
  exercise: { icon: faRunning, color: "#1e9b8a", colorDark: "#0bb9b9" },
  others: { icon: faSmile, color: "#ff9047", colorDark: "#e0b942" },
};

export default categoriesIcons;
