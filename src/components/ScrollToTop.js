import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
const ScrollToTop = () => {
  const [isVisable, setIsVisable] = useState(false);

  const changeVisability = () => {
    // user scroll down more than 300px
    if (window.pageYOffset > 300) {
      setIsVisable(true);
    } else {
      setIsVisable(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", changeVisability);

    return () => {
      window.removeEventListener("scroll", changeVisability);
    };
  }, []);
  return (
    <div
      className="scrollToTop"
      style={{ display: isVisable ? "flex" : "none" }}
    >
      <button className="toTopButton" onClick={scrollToTop}>
        <FontAwesomeIcon
          icon={faArrowCircleUp}
          style={{
            color: "#69d2e7",
            fontSize: "50px",
          }}
        />
      </button>
    </div>
  );
};

export default ScrollToTop;
