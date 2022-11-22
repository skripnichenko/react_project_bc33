import React from "react";
import PropTypes from "prop-types";

import { ButtonWrapper } from "./Button.styled";
import plus from "../../assets/plus.svg";

class Button extends React.Component {
  static propTypes = {
    isImg: PropTypes.bool,
    title: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
  };
  static defaultProps = {
    isImg: false,
    title: "",
    callback: () => {},
  };
  render() {
    const { isImg, title, callback } = this.props;
    return (
      <ButtonWrapper onClick={callback}>
        {isImg && <img src={plus} alt="" />}
        {title}
      </ButtonWrapper>
    );
  }
}

export default Button;
