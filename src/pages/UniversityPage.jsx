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
  };

  changeOpenedForm = (param) => {
    this.setState({
      openedForm: this.state.openedForm === param ? "" : param,
    });
  };

  render() {
    const { name, description } = data;
    const { openedForm } = this.state;
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
          <TutorsList />
          {openedForm === "tutors" && <TutorsForm />}
          <Button
            title="Додати викладача"
            callback={() => this.changeOpenedForm("tutors")}
            isImg={true}
          />
        </Section>
        <Section title="Міста" img={candy}>
          <CitiesList />
          {openedForm === "cities" && <CitiesForm />}
          <Button
            title="Додати місто"
            callback={() => this.changeOpenedForm("cities")}
            isImg={true}
          />
        </Section>
        <Section title="Факультети" img={robot}>
          <FacultiesList />
          {openedForm === "faculties" && <FacultiesForm />}
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
