import warning from "../../assets/warning.svg";
import Button from "../Button/Button";
import { Img } from "./Modal.styled";
import edit from "../../assets/edit.svg";
import { useState } from "react";

const Modal = ({ clickModal }) => {
  const [city, setCity] = useState("");
  console.log(clickModal);
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
  };

  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content text-center p-4">
          {clickModal === "delete" ? (
            <>
              <Img src={warning} alt="" width="40" />
              <h5 class="modal-title" id="exampleModalLabel">
                Видалення факультету
              </h5>
              <p>Будуть видалені всі матеріали та інформація про факультет</p>
              <div className="d-flex justify-content-center">
                <Button
                  title="Ні"
                  type="button"
                  data-bs-dismiss="modal"
                  isGray={true}
                />
                <Button title="Так" type="button" data-bs-dismiss="modal" />
              </div>
            </>
          ) : (
            <>
              <Img src={edit} alt="" width="40" />
              <h5 class="modal-title" id="exampleModalLabel">
                Редактировать информацию о Городе
              </h5>
              <form onSubmit={hundleSubmit}>
                <label className="w-100 text-start">
                  Місто
                  <br />
                  <input
                    className="w-100"
                    type="text"
                    name={"city"}
                    onChange={handleChange}
                    value={city}
                  />
                </label>
                <Button
                  title="Зберегти"
                  type="submit"
                  data-bs-dismiss="modal"
                  isCentered={true}
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
