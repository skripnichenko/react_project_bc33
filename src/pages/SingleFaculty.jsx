import React from 'react'
import { useState } from 'react';
import Paper from '../components/Paper/Paper'
import Section from '../components/Section/Section';
import s from './SingleFaculty.module.css';

const SingleFaculty = () => {
    const [activeTab, setActiveTab] = useState('description');


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
                        Опыт, концентрат знаний и возможность избежать большинство ошибок при приеме на работу. Мы знаем, что хотят большинство локальных и иностранных компаний и можем вам это дать.
                        А еще мы постоянно совершенствуем наши курсы программирования, добавляя туда что-то новое. Вы можете лично ознакомиться с историями успеха наших выпускников, чтобы убедиться в эффективности нашей методики обучения. Да, мы начнем с азов и самой простой информации. Знаем, что большинство людей приходят к нам с нулевыми знаниями.
                    </p> : <p>
                        History Опыт, концентрат знаний и возможность избежать большинство ошибок при приеме на работу. Мы знаем, что хотят большинство локальных и иностранных компаний и можем вам это дать.
                        А еще мы постоянно совершенствуем наши курсы программирования, добавляя туда что-то новое. Вы можете лично ознакомиться с историями успеха наших выпускников, чтобы убедиться в эффективности нашей методики обучения. Да, мы начнем с азов и самой простой информации. Знаем, что большинство людей приходят к нам с нулевыми знаниями.
                    </p>}
                </Paper>
            </Section>
        </div>
    )
}

export default SingleFaculty