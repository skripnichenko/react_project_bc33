import React from "react";
import s from "./Paper.module.css";

const Paper = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default Paper;
