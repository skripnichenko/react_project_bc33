import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Paper from '../components/Paper/Paper'
import Section from '../components/Section/Section';
import s from './SingleFaculty.module.css';

const SingleFaculty = () => {
    const faculties = useSelector(state => state.faculties.faculties)
    const [activeTab, setActiveTab] = useState('description');
    const {id} = useParams();

    const currentFaculty = faculties.filter(el => el.id === id)[0];


    return (
        <div>
            <Section title="Факультет нейромереж">
                <div className='d-flex w-100 bg-dark p-4 gap-5'>
                    <div className={`text-uppercase ${activeTab === 'description' ? 'text-light' : 'text-secondary'}`} onClick={() => setActiveTab('description')}>
                        Опис
                    </div>
                    <div className={`text-uppercase ${activeTab !== 'description' ? 'text-light' : 'text-secondary'}`} onClick={() => setActiveTab('history')}>
                        Історія
                    </div>
                </div>
                <Paper className={s.space}>
                    {activeTab === 'description' ? <p>
                    {currentFaculty.description}
                    </p> : <p>
                       {currentFaculty.history}
                    </p>}
                </Paper>
            </Section>
        </div>
    )
}

export default SingleFaculty