import warning from "../../assets/warning.svg";
import Button from "../Button/Button";
import { Img } from "./Modal.styled";
import edit from "../../assets/edit.svg";
import { useEffect, useState } from "react";

const Modal = ({ clickModal, from, setClickModal, id, handleClick, editFunc }) => {
  const [city, setCity] = useState("");


  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    editFunc(id, city)
  };


  return (
    <div
      className="modal fade"
      id={`exampleModal${clickModal + from + id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-center p-4">
          {clickModal === "Delete" ? (
            <>
              <Img src={warning} alt="" width="40" />
              <h5 className="modal-title" id="exampleModalLabel">
                Видалення {from === 'city' ? 'міста' : 'факультету'}
              </h5>
              <p>Будуть видалені всі матеріали та інформація про {from === 'city' ? 'місто' : 'факультет'}</p>
              <div className="d-flex justify-content-center">
                <Button
                  title="Ні"
                  type="button"
                  data-bs-dismiss="modal"
                  isGray={true}
                  // callback={handleClick}
                />
                <Button title="Так" type="button" data-bs-dismiss="modal" callback={handleClick} />
              </div>
            </>
          ) : (
            <>
              <Img src={edit} alt="" width="40" />
              <h5 className="modal-title" id="exampleModalLabel">
                Редактировать информацию о {from === 'city' ? 'Городе' : 'Факультете'}
              </h5>
              <form onSubmit={hundleSubmit}>
                <label className="w-100 text-start">
                {from === 'city' ? 'Місто' : 'Факультет'}
                  <br />
                  <input
                    className="w-100"
                    type="text"
                    onChange={handleChange}
                    value={city}
                  />
                </label>
                <Button
                  title="Зберегти"
                  type="submit"
                  data-bs-dismiss="modal"
                  isCentered={true}
                  // callback={() => setClickModal('')}
                />
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Modal;
