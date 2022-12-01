import React from "react";
import { nanoid } from "nanoid";
import EditField from "../EditField/EditField";
import PropTypes from "prop-types";

const CitiesList = ({ cities = [] }) => {
  return (
    <ul className="row">
      {cities.map((el) => {
        return (
          <EditField className="col-4" key={nanoid()} title={el} from="city" />
        );
      })}
    </ul>
  );
};

export default CitiesList;
CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
};
