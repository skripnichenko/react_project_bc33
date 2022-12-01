import React, { useState } from "react";
import Paper from "../Paper/Paper";
import dots from "../../assets/dots.svg";
import { EditFieldWrapper, ModalMenu } from "./EditField.styled";
import note from "../../assets/note.svg";
import bin from "../../assets/bin.svg";
import Modal from "../Modal/Modal";

const EditField = ({ title = "" }) => {
  const [showModal, setShowModal] = useState(false);
  const [clickModal, setClickModal] = useState("");
  const changeShowModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <Paper className="col-sm-6 col-xs-12 col-lg-4 mx-2 mb-2 position-relative">
      <EditFieldWrapper>
        <div>{title}</div>
        <div>
          <img onClick={changeShowModal} src={dots} alt="" />
        </div>
        {showModal && (
          <ModalMenu>
            <button
              onClick={() => {
                setClickModal("edit");
              }}
              value="edit"
              className="d-flex align-items-center border-0 bg-body"
              type="button"
              // class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img src={note} alt="note" />
              <span className="ms-2">Редагувати</span>
            </button>
            <button
              onClick={() => {
                setClickModal("delete");
              }}
              value="delete"
              className="d-flex align-items-center border-0 bg-body"
              type="button"
              // class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img src={bin} alt="bin" />
              <span className="ms-2">Видалити</span>
            </button>
            {/* <div className="d-flex align-items-center">
              <img src={note} alt="note" />
              <span className="ms-2">Редагувати</span>
            </div>
            <div className="d-flex align-items-center">
              <img src={bin} alt="bin" />
              <span className="ms-2">Видалити</span>
            </div> */}
          </ModalMenu>
        )}
        <Modal clickModal={clickModal} />
      </EditFieldWrapper>
    </Paper>
  );
};

export default EditField;
