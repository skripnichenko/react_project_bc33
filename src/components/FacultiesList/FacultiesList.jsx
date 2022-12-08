import React from "react";
import EditField from "../EditField/EditField";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const FacultiesList = ({ faculties = [], deleteFaculty = () => {}, editFaculty = () => {}, isFacultyPage = false }) => {
  return (
    <ul className="row">
      {faculties.map(({name, id}) => {
        return <EditField isFacultyPage={isFacultyPage} key={nanoid()} title={name} from="faculties" id={id} deleteFunc={deleteFaculty} editFunc={editFaculty} />;
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
  deleteFaculty: PropTypes.func.isRequired,
};
