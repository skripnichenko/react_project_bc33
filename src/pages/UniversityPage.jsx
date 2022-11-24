import React from "react";

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

class UniversityPage extends React.Component {
  state = {
    openedForm: "",
    cities: data.cities,
    faculties: data.department,
    tutors: data.tutors,
  };

  changeOpenedForm = (param) => {
    this.setState({
      openedForm: this.state.openedForm === param ? "" : param,
    });
  };

  addCities = (city) => {
    this.setState({
      cities: [...this.state.cities, city],
    });
  };
  addFaculties = (faculty) => {
    this.setState({
      faculties: [...this.state.faculties, { name: faculty }],
    });
  };
  addTutors = (tutor) => {
    this.setState({
      tutors: [...this.state.tutors, tutor],
    });
  };

  render() {
    const { name, description } = data;
    const { openedForm, cities, faculties, tutors } = this.state;

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
          {openedForm === "tutors" && <TutorsForm addTutors={this.addTutors} />}
          <Button
            title="Додати викладача"
            callback={() => this.changeOpenedForm("tutors")}
            isImg={true}
          />
        </Section>
        <Section title="Міста" img={candy}>
          <CitiesList cities={cities} />
          {openedForm === "cities" && <CitiesForm addCities={this.addCities} />}
          <Button
            title="Додати місто"
            callback={() => this.changeOpenedForm("cities")}
            isImg={true}
          />
        </Section>
        <Section title="Факультети" img={robot}>
          <FacultiesList faculties={faculties} />
          {openedForm === "faculties" && (
            <FacultiesForm addFaculties={this.addFaculties} />
          )}
          <Button
            title="Додати факультет"
            callback={() => this.changeOpenedForm("faculties")}
            isImg={true}
          />
        </Section>
      </Main>
    );
  }
}

export default UniversityPage;
