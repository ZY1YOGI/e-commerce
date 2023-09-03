"use client";
import { useEffect } from "react";
import { MdDarkMode } from "react-icons/md";

import style from "./sidebar.module.css";


const buttonTheme = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme") ?? localStorage.setItem("theme", "light");
    if (theme === "light") {
      document.documentElement.className = "light";
      document.documentElement.setAttribute("data-theme", "light");
    } else if (theme === "dark") {
      document.documentElement.className = "dark";
      document.documentElement.setAttribute("data-theme", "dark");
    }
  });

  const changeTheme = () => {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.className = "dark";
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.className = "light";
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button className={style.buttonTheme} onClick={changeTheme} role='switch' id='switch-theme'>
      <MdDarkMode size={35} />
    </button>
  )
}


export default buttonTheme;