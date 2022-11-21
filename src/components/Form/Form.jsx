import React from "react";
import s from "./Form.module.css";

const tutorsFormList = [
  {
    name: "lastName",
    type: "text",
    placeholder: "Прізвище",
  },
  {
    name: "firstName",
    type: "text",
    placeholder: "Ім'я",
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Прізвище",
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Прізвище",
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Прізвище",
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Прізвище",
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Прізвище",
  },
];

export class TutorsForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Додати викладача</h3>
        <form className={s.form}>
          {/* <input type="text" name="lastName" placeholder="Прізвище" />
          <input type="text" name="firstName" placeholder="Ім'я" />
          <input type="text" name="patronymic" placeholder="По-батькові" />
          <input type="phone" name="phone" placeholder="Телефон" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="city" placeholder="Місто" /> */}
          {tutorsFormList.map(({ type, name, placeholder }) => {
            return (
              <input
                className={s.inputWrapper}
                type={type}
                name={name}
                placeholder={placeholder}
              />
            );
          })}
          <button type="submit">Запросити</button>
        </form>
      </div>
    );
  }
}
