import React from 'react'
import { ButtonWrapper } from './Button.styled';
import plus from '../../assets/plus.svg';

const Button = ({ title, isImg }) => {
  return (
    <ButtonWrapper>
      {isImg && <img src={plus} alt="" />}
      {title}
    </ButtonWrapper>
  )
}

export default Button