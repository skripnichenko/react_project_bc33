import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FacultiesList from "../components/FacultiesList/FacultiesList";
import Loader from "../components/Loader/Loader";
import Section from "../components/Section/Section";
import {
  changeFaculties,
  deleteFaculties,
} from "../redux/SliceFaculties/operationFaculties";
import data from "../utils/data.json";

const FacultiesPage = () => {
  const {
    faculties,
    isLoading: isLoadingFaculties,
    error: errorFaculties,
  } = useSelector((state) => state.faculties);
  const dispatch = useDispatch();
  // const [faculties, setFaculties] = useState(data.department);

  const editFaculty = (id, name) => {
    dispatch(changeFaculties({ id, name }));
    // setFaculties((prevState) =>
    //   prevState.map((el) => (el.id !== id ? el : { ...el, name: title }))
    // );
  };

  const deleteFaculty = (id) => {
    dispatch(deleteFaculties(id));
    // setFaculties((prevState) => prevState.filter((el) => el.id !== id));
  };
  return !isLoadingFaculties ? (
    <div>
      <Section title="Факультети" isLeft={false}>
        <FacultiesList
          isFacultyPage={true}
          faculties={faculties}
          deleteFaculty={deleteFaculty}
          editFaculty={editFaculty}
        />
      </Section>
    </div>
  ) : (
    <Loader />
  );
};

export default FacultiesPage;
