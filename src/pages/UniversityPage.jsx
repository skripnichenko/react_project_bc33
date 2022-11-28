import React, { useState } from "react";

import Card from "../components/Card/Card";
import Main from "../components/Main/Main";
import Paper from "../components/Paper/Paper";
import Section from "../components/Section/Section";
import cat from "../assets/cat.svg";
import TutorsList from "../components/TutorsList/TutorsList";
import Button from "../components/Button/Button";
import candy from "../assets/candy.svg";
import robot from "../assets/robot.svg";
import EditField from "../components/EditField/EditField";
import s from "./University.module.css";
import CitiesList from "../components/CitiesList/CitiesList";
import FacultiesList from "../components/FacultiesList/FacultiesList";
import { CitiesForm, FacultiesForm, TutorsForm } from "../components/Form/Form";
import data from "../utils/data.json";

const UniversityPage = () => {
  const [openedForm, setOpenedForm] = useState("");
  const [cities, setCities] = useState(data.cities);
  const [faculties, setFaculties] = useState(data.department);
  const [tutors, setTutors] = useState(data.tutors);
  const { name, description } = data;

  const changeOpenedForm = (param) => {
    setOpenedForm((prevState) => (prevState === param ? "" : param));
  };

  const addCities = (city) => {
    setCities((prevState) => [...prevState, city]);
  };
  const addFaculties = (faculty) => {
    setFaculties((prevState) => [...prevState, { name: faculty }]);
  };
  const addTutors = (tutor) => {
    setTutors((prevState) => [...prevState, tutor]);
  };

  return (
    <Main>
      <Section title="Інформація про університет" isLeft={false}>
        <div className={s.universityInfo}>
          <Paper width="144px">
            <Card name={name} />
          </Paper>
          <Paper>{description}</Paper>
        </div>
      </Section>
      <Section title="Викладачі" img={cat}>
        <TutorsList tutors={tutors} />
        {openedForm === "tutors" && <TutorsForm addTutors={addTutors} />}
        <Button
          title="Додати викладача"
          callback={() => changeOpenedForm("tutors")}
          isImg={true}
        />
      </Section>
      <Section title="Міста" img={candy}>
        <CitiesList cities={cities} />
        {openedForm === "cities" && <CitiesForm addCities={addCities} />}
        <Button
          title="Додати місто"
          callback={() => changeOpenedForm("cities")}
          isImg={true}
        />
      </Section>
      <Section title="Факультети" img={robot}>
        <FacultiesList faculties={faculties} />
        {openedForm === "faculties" && (
          <FacultiesForm addFaculties={addFaculties} />
        )}
        <Button
          title="Додати факультет"
          callback={() => changeOpenedForm("faculties")}
          isImg={true}
        />
      </Section>
    </Main>
  );
};

export default UniversityPage;
