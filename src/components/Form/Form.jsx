import React from "react";
import { Formik } from 'formik';
import { useForm } from "react-hook-form";
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
    this.props.addTutors(this.state);
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

  onSubmit = (value) => {
    this.props.addCities(value.city);
  };


  render() {
    return (
      <div className={s.wrap}>
        <h3>Додати місто</h3>
        <Formik
          initialValues={{ city: '' }}
          validate={values => {
            const errors = {};
            if (!values.city) {
              errors.city = 'Required';
            }

            return errors;
          }}
          onSubmit={(values) => {
            this.onSubmit(values)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                className={s.inputWrapper}
                type="text"
                name="city"
                placeholder="Місто"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
              {errors.city && touched.city && errors.city}
              <Button title="Додати" type="submit" />
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export const FacultiesForm = ({ addFaculties, }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => addFaculties(data.faculty);


  console.log(errors);
  return (
    <div className={s.wrap}>
      <h3>Додати факультет</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={s.inputWrapper}
          type="text"
          {...register("faculty", { required: true, maxLength: 80 })}
          placeholder="Факультет"
        />
        <Button title="Додати" type="submit" />
      </form>
    </div>
  );
}
