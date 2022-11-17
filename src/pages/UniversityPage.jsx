import Card from "../components/Card/Card";
import Main from "../components/Main/Main";
import Paper from "../components/Paper/Paper";
import Section from "../components/Section/Section";
import cat from '../assets/cat.svg';
import Tutors from "../components/Tutors/Tutors";
import Button from "../components/Button/Button";
import candy from '../assets/candy.svg';
import robot from '../assets/robot.svg';
import EditField from "../components/EditField/EditField";
import s from './University.module.css';
import CitiesList from "../components/CitiesList/CitiesList";

const UniversityPage = (props) => {
  return (
    <Main>
      <Section title="Інформація про університет" isLeft={false}>
        <div className={s.universityInfo}>
          <Paper width="144px"><Card /></Paper>
          <Paper>Опыт, концентрат знаний и возможность избежать большинство ошибок при приеме на работу. Мы знаем, что хотят большинство локальных и иностранных компаний и можем вам это дать. А еще мы постоянно совершенствуем наши курсы программирования, добавляя туда что-то новое. Вы можете лично ознакомиться с историями успеха наших выпускников, чтобы убедиться в эффективности нашей методики обучения. Да, мы начнем с азов и самой простой информации. Знаем, что большинство людей приходят к нам с нулевыми знаниями. </Paper>
        </div>
      </Section>
      <Section title="Викладачі" img={cat}>
          <Paper><Tutors /></Paper>
          <Button title="Додати викладача" isImg={true} />
      </Section>
      <Section title="Міста" img={candy}>
          <CitiesList />
          <Button title="Додати місто" isImg={true} />
      </Section>
      <Section title="Факультети" img={robot}>
          <EditField />
          <Button title="Додати факультет" isImg={true} />
      </Section>
    </Main>
  );
};
export default UniversityPage;
