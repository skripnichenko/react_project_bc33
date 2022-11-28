import React from "react";
import PropTypes from "prop-types";

import { ButtonWrapper } from "./Button.styled";
import plus from "../../assets/plus.svg";

const Button = ({
  isImg = false,
  title = "",
  callback = () => {},
  isGray = false,
  ...props
}) => {
  return (
    <ButtonWrapper onClick={callback} isGray={isGray} {...props}>
      {isImg && <img src={plus} alt="" />}
      {title}
    </ButtonWrapper>
  );
};
Button.propTypes = {
  isImg: PropTypes.bool,
  title: PropTypes.string.isRequired,
  callback: PropTypes.func,
};
export default Button;
