import React from "react";
import Paper from "../Paper/Paper";
import dots from "../../assets/dots.svg";
import { EditFieldWrapper, ModalMenu } from "./EditField.styled";
import note from "../../assets/note.svg";
import bin from "../../assets/bin.svg";

const EditField = ({ title = "" }) => {
  return (
    <Paper className="col-sm-6 col-xs-12 col-lg-4 mx-2 mb-2 position-relative">
      <EditFieldWrapper>
        <div>{title}</div>
        <div>
          <img src={dots} alt="" />
        </div>
        <ModalMenu>
          <div className="d-flex align-items-center">
            <img src={note} alt="note" />
            <span className="ms-2">Редагувати</span>
          </div>
          <div className="d-flex align-items-center">
            <img src={bin} alt="bin" />
            <span className="ms-2">Видалити</span>
          </div>
        </ModalMenu>
      </EditFieldWrapper>
    </Paper>
  );
};

export default EditField;
