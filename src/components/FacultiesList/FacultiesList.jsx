import React, { Component } from "react";
import data from '../../utils/data.json'
import EditField from '../EditField/EditField';
import { nanoid } from 'nanoid'

class FacultiesList extends Component {
  static defaultProps = {};

    render() {
        const { department } = data;
        return <ul>
            {department.map(el => {
                return  <EditField key={nanoid()} title={el.name}/>
            })}
    </ul>;
  }
};
export default FacultiesList;