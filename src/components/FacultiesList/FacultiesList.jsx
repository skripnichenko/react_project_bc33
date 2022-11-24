import React, { Component } from "react";
import EditField from "../EditField/EditField";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

class FacultiesList extends Component {
  static defaultProps = { faculties: [] };

  render() {
    const { faculties } = this.props;
    return (
      <ul className="row">
        {faculties.map((el) => {
          return <EditField key={nanoid()} title={el.name} />;
        })}
      </ul>
    );
  }
}
export default FacultiesList;
FacultiesList.propTypes = {
  faculties: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
};
