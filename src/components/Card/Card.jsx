import React from "react";
import bin from "../../assets/bin.svg";
import note from "../../assets/note.svg";
import school from "../../assets/school.svg";
import PropTypes from "prop-types";
import { CardWrapper, ImagesWrapper } from "./Card.styled";

const Card = ({ name = "" }) => {
  return (
    <CardWrapper>
      <img src={school} alt="" />
      <p>університет</p>
      <h3>{name}</h3>
      <ImagesWrapper>
        <img src={note} alt="" />
        <img src={bin} alt="" />
      </ImagesWrapper>
    </CardWrapper>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
};
