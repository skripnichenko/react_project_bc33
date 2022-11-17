import React from 'react'
import Paper from '../Paper/Paper';
import dots from '../../assets/dots.svg';
import { EditFieldWrapper } from './EditField.styled';

const EditField = ({title = ''}) => {
    return (
        <Paper width='370px'>
            <EditFieldWrapper>
                <div>
                    {title}
                </div>
                <div>
                    <img src={dots} alt="" />
                </div>
            </EditFieldWrapper>
        </Paper>
    )
}

export default EditField