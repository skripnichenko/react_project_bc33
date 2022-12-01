import React from "react";
import EditField from "../EditField/EditField";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const FacultiesList = ({ faculties = [] }) => {
  return (
    <ul className="row">
      {faculties.map((el) => {
        return <EditField key={nanoid()} title={el.name} from="faculties" />;
      })}
    </ul>
  );
};
export default FacultiesList;
FacultiesList.propTypes = {
  faculties: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
};
