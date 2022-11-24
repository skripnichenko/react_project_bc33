import React from "react";
import s from "./Paper.module.css";
import PropTypes from "prop-types";
import cn from "classnames";

const Paper = ({ children, width, className }) => {
  return (
    <div className={cn(s.wrapper, className)} style={{ width }}>
      {children}
    </div>
  );
};

export default Paper;

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
