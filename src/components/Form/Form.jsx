import React from "react";
import Button from "../Button/Button";
import s from "./Form.module.css";

const tutorsFormList = {
  lastName: {
    name: "lastName",
    type: "text",
    placeholder: "Прізвище",
  },
  firstName: {
    name: "firstName",
    type: "text",
    placeholder: "Ім'я",
  },
  patronymic: {
    name: "patronymic",
    type: "text",
    placeholder: "По-батькові",
  },
  phone: {
    name: "phone",
    type: "text",
    placeholder: "Телефон",
  },
  email: {
    name: "email",
    type: "text",
    placeholder: "Email",
  },
  city: {
    name: "city",
    type: "text",
    placeholder: "Місто",
  },
};

export class TutorsForm extends React.Component {
  state = Object.keys(tutorsFormList).reduce((acc, cur) => {
    acc[cur] = "";
    return acc;
  }, {});

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className={s.wrap}>
        <h3>Додати викладача</h3>
        <form onSubmit={this.onSubmit}>
          <div className={s.form}>
            {Object.keys(tutorsFormList).map((el, ind) => {
              const { type, name, placeholder } = tutorsFormList[el];
              return (
                <input
                  key={ind}
                  className={s.inputWrapper}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  onChange={this.onChange}
                  value={this.state[name]}
                />
              );
            })}
          </div>

          <Button title="Запросити" />
        </form>
      </div>
    );
  }
}

export class CitiesForm extends React.Component {
  state = {
    city: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { city } = this.state;
    return (
      <div className={s.wrap}>
        <h3>Додати місто</h3>
        <form onSubmit={this.onSubmit}>
          <input
            className={s.inputWrapper}
            type="text"
            name="city"
            placeholder="Місто"
            onChange={this.onChange}
            value={city}
          />
          <Button title="Додати" />
        </form>
      </div>
    );
  }
}

export class FacultiesForm extends React.Component {
  state = {
    faculty: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { faculty } = this.state;
    return (
      <div className={s.wrap}>
        <h3>Додати факультет</h3>
        <form onSubmit={this.onSubmit}>
          <input
            className={s.inputWrapper}
            type="text"
            name="faculty"
            placeholder="Факультет"
            onChange={this.onChange}
            value={faculty}
          />
          <Button title="Додати" />
        </form>
      </div>
    );
  }
}
