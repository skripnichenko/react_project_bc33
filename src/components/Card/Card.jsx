import React from 'react';
import bin from '../../assets/bin.svg';
import note from '../../assets/note.svg';
import school from '../../assets/school.svg';
import { CardWrapper, ImagesWrapper } from './Card.styled';


const Card = () => {
  return (
    <CardWrapper>
        <img src={school} alt="" />
        <p>університет</p>
        <h3>MIT</h3>
        <ImagesWrapper>
            <img src={note} alt="" />
            <img src={bin} alt="" />
        </ImagesWrapper>
    </CardWrapper>
  )
}

export default Card