import React from "react";
import s from "./Section.module.css";
const Section = ({ children, title, img, isLeft = true }) => {
  return (
    <div>
      {!isLeft ? <div className={s.titleWrapperRight}>
        <img src={img} alt="" />
        <h3 className={s.title}>{title}</h3>
      </div> :
        <div className={s.titleWrapper}>
          <img src={img} alt="" />
          <h3 className={s.title}>{title}</h3>
        </div>}
      {children}
    </div>
  );
};

export default Section;
