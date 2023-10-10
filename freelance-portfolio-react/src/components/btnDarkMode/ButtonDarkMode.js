import { useEffect } from "react";

import { useLocalStorage } from "../../utils/useLocalStorage";

import { detectDarkMode } from "../../utils/detectDarkMode";

import sun from "./sun.svg";
import moon from "./moon.svg";
import "./style.css";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
    darkMode === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [darkMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const newColorScheme = e.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };

  function btnType() {
    const btnNormal = "dark-mode-btn";
    const btnActive = "dark-mode-btn dark-mode-btn--active";
    return darkMode === "dark" ? btnActive : btnNormal;
  }

  return (
    <button className={btnType()} onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
