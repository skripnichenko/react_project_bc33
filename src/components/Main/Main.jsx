import React from "react";
import s from "./Main.module.css";
const Main = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default Main;
