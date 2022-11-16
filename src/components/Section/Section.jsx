import React from "react";
import s from "./Section.module.css";
const Section = ({ children, title }) => {
  return (
    <div>
      <h3 className={s.title}>{title}</h3>
      {children}
    </div>
  );
};

export default Section;
