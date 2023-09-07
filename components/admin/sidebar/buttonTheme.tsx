"use client";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import style from "./sidebar.module.css";


const buttonTheme = () => {
  const [theme, setTheme] = useState<string | void>("")
  useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? localStorage.setItem("theme", "light"))
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
    setTheme(localStorage.getItem("theme") || theme)
  };

  return (
    <button className={style.buttonTheme} onClick={changeTheme} role='switch' id='switch-theme' title={theme || "light"}>
      {theme == "light" ?
        <MdDarkMode size={35} />
        : <MdLightMode size={35} />
      }
    </button>
  )
}


export default buttonTheme;