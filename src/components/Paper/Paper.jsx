import React from "react";
import s from "./Paper.module.css";

const Paper = ({ children, width }) => {
  return <div className={s.wrapper} style={{width}}>{children}</div>;
};

export default Paper;
