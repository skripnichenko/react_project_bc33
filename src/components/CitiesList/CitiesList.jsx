import React from "react";
import EditField from "../EditField/EditField";
import PropTypes from "prop-types";

const CitiesList = ({ cities = [], deleteCity = () => {} }) => {
  return (
    <ul className="row">
      {cities.map(({name, id}) => {
        return (
          <EditField className="col-4" key={id} title={name} from="city" id={id} deleteFunc={deleteCity} />
        );
      })}
    </ul>
  );
};

export default CitiesList;
CitiesList.propTypes = {
  deleteCity: PropTypes.func.isRequired,
  // cities: PropTypes.array.isRequired,
};
