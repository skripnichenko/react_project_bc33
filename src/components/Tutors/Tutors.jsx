import React from "react";
import phoneImg from "../../assets/phone.svg";
import emailImg from "../../assets/email.svg";
import geo from "../../assets/geo.svg";
import PropTypes from "prop-types";
import { TutorsWrapper, LinkWrapper, ImageWrapper } from "./Tutors.styled";

const Tutors = ({
  firstName,
  lastName,
  patronymic,
  phone,
  email,
  city,
  options,
}) => {
  return (
    <TutorsWrapper>
      <div>
        <div>{lastName}</div>
        <div>{firstName}</div>
        <div>{patronymic}</div>
      </div>
      <div>
        <div>
          <ImageWrapper src={phoneImg} alt="" />
          <LinkWrapper href={`tel:${phone}`}>{phone}</LinkWrapper>
        </div>
        <div>
          <ImageWrapper src={emailImg} alt="" />
          <LinkWrapper href={`mailto:${email}`}>{email}</LinkWrapper>
        </div>
        <div>
          <ImageWrapper src={geo} alt="" />
          <span>{city}</span>
        </div>
      </div>
      <div>{options}</div>
    </TutorsWrapper>
  );
};

export default Tutors;

Tutors.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  patronymic: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
};
