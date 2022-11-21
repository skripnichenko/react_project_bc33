import React from "react";
import s from "./Paper.module.css";
import PropTypes from "prop-types";

const Paper = ({ children, width }) => {
  return (
    <div className={s.wrapper} style={{ width }}>
      {children}
    </div>
  );
};

export default Paper;

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
