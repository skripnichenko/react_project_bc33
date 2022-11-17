import React from 'react';
import { nanoid } from 'nanoid'
import EditField from '../EditField/EditField';
import data from '../../utils/data.json';


const CitiesList = () => {
    const { cities } = data;
    return (
        <ul>
            {cities.map(el => {
                return <EditField key={nanoid()} title={el}/>
            })}
        </ul>
    )
}

export default CitiesList