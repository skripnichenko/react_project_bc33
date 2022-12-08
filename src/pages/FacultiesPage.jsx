import React, { useState } from 'react'
import FacultiesList from '../components/FacultiesList/FacultiesList';
import Section from '../components/Section/Section';
import data from "../utils/data.json";


const FacultiesPage = () => {
    const [faculties, setFaculties] = useState(data.department);

    const editFaculty = (id, title) => {
        setFaculties(prevState => prevState.map(el => el.id !== id ? el : { ...el, name: title }))
    }

    const deleteFaculty = (id) => {
        setFaculties((prevState) => prevState.filter(el => el.id !== id))
    }
    return (
        <div>
            <Section title="Факультети" isLeft={false}>
                <FacultiesList isFacultyPage={true} faculties={faculties} deleteFaculty={deleteFaculty} editFaculty={editFaculty} />
            </Section>
        </div>
    )
}

export default FacultiesPage