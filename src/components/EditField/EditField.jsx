import React, { useState } from "react";
import Paper from "../Paper/Paper";
import dots from "../../assets/dots.svg";
import { EditFieldWrapper, ModalMenu } from "./EditField.styled";
import note from "../../assets/note.svg";
import bin from "../../assets/bin.svg";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

const EditField = ({ title = "", from, id, deleteFunc, editFunc, isFacultyPage }) => {
  const [showModal, setShowModal] = useState(false);
  const [clickModal, setClickModal] = useState("");

  const changeShowModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleClick = () => {
    deleteFunc(id);
  }

  return (
    <Paper className="col-sm-6 col-xs-12 col-lg-4 mx-2 mb-2 position-relative">
      <EditFieldWrapper>
        {isFacultyPage ? <Link to={`/faculties/${id}`}>
          <div>{title}</div>
        </Link> : <div>{title}</div>}
        <div>
          <img onClick={changeShowModal} src={dots} alt="" />
        </div>
        {showModal && (
          <ModalMenu>
            <button
              onClick={() => {
                setClickModal("Edit");
              }}
              className="d-flex align-items-center border-0 bg-body"
              type="button"
              data-bs-toggle="modal"
              data-bs-target={`#exampleModalEdit${from + id}`}
            >
              <img src={note} alt="note" />
              <span className="ms-2">Редагувати</span>
            </button>
            <button
              onClick={() => {
                setClickModal("Delete");
              }}
              className="d-flex align-items-center border-0 bg-body"
              type="button"
              data-bs-toggle="modal"
              data-bs-target={`#exampleModalDelete${from + id}`}
            >
              <img src={bin} alt="bin" />
              <span className="ms-2">Видалити</span>
            </button>
          </ModalMenu>
        )}
        <Modal clickModal={'Delete'} from={from} id={id} setClickModal={setClickModal} handleClick={handleClick} />
        <Modal clickModal={'Edit'} from={from} id={id} setClickModal={setClickModal} editFunc={editFunc} />
      </EditFieldWrapper>
    </Paper>
  );
};

export default EditField;
