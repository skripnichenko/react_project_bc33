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
import { TutorsForm } from "../components/Form/Form";
import data from "../utils/data.json";

const UniversityPage = (props) => {
  const { name, description } = data;
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
        <TutorsForm />
        <Button title="Додати викладача" isImg={true} />
      </Section>
      <Section title="Міста" img={candy}>
        <CitiesList />
        <Button title="Додати місто" isImg={true} />
      </Section>
      <Section title="Факультети" img={robot}>
        <FacultiesList />
        <Button title="Додати факультет" isImg={true} />
      </Section>
    </Main>
  );
};
export default UniversityPage;
