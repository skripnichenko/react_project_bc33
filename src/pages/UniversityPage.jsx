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
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import {
  addCities,
  changeCities,
  deleteCities,
} from "../redux/SliceCity/operationCity";
import {
  addFaculties,
  changeFaculties,
  deleteFaculties,
} from "../redux/SliceFaculties/operationFaculties";
import { addTutors } from "../redux/SliceTutors/operationTutors";

const UniversityPage = () => {
  const {
    cities,
    isLoading: isLoadingCities,
    error: errorCities,
  } = useSelector((state) => state.cities);

  const {
    faculties,
    isLoading: isLoadingFaculties,
    error: errorFaculties,
  } = useSelector((state) => state.faculties);
  const {
    tutors,
    isLoading: isLoadingTutors,
    error: errorTutors,
  } = useSelector((state) => state.tutors);
  const [openedForm, setOpenedForm] = useState("");
  const { name, description } = data;
  const dispatch = useDispatch();

  const changeOpenedForm = (param) => {
    setOpenedForm((prevState) => (prevState === param ? "" : param));
  };

  const onAddCities = (city) => {
    dispatch(addCities({name: city}));
  };
  const onAddFaculties = (faculty) => {
    dispatch(addFaculties({ name: faculty }));
  };
  const onAddTutors = (tutor) => {
    dispatch(addTutors(tutor));
  };

  const deleteCity = (id) => {
    dispatch(deleteCities(id));
  };

  const deleteFaculty = (id) => {
    dispatch(deleteFaculties(id));
  };

  const editCity = (id, name) => {
    dispatch(changeCities({ id, name }));
  };

  const editFaculty = (id, name) => {
    dispatch(changeFaculties({ id, name }));
  };

  return !isLoadingCities || !isLoadingFaculties || !isLoadingTutors ? (
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
        {openedForm === "tutors" && <TutorsForm addTutors={onAddTutors} />}
        <Button
          title="Додати викладача"
          callback={() => changeOpenedForm("tutors")}
          isImg={true}
        />
      </Section>
      <Section title="Міста" img={candy}>
        <CitiesList
          cities={cities}
          deleteCity={deleteCity}
          editCity={editCity}
        />
        {openedForm === "cities" && <CitiesForm addCities={onAddCities} />}
        <Button
          title="Додати місто"
          callback={() => changeOpenedForm("cities")}
          isImg={true}
        />
      </Section>
      <Section title="Факультети" img={robot}>
        <FacultiesList
          faculties={faculties}
          deleteFaculty={deleteFaculty}
          editFaculty={editFaculty}
        />
        {openedForm === "faculties" && (
          <FacultiesForm addFaculties={onAddFaculties} />
        )}
        <Button
          title="Додати факультет"
          callback={() => changeOpenedForm("faculties")}
          isImg={true}
        />
      </Section>
    </Main>
  ) : (
    <Loader />
  );
};

export default UniversityPage;
