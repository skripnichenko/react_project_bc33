import warning from "../../assets/warning.svg";
import Button from "../Button/Button";
import { Img } from "./Modal.styled";
import edit from "../../assets/edit.svg";
import { useEffect, useState } from "react";

const Modal = ({ clickModal, from, setClickModal }) => {
  const [city, setCity] = useState("");

  console.log(
    clickModal, from
  );

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    setClickModal('')
  };

  useEffect(() => {
    return () => {
      setClickModal('');
    }
  }, [setClickModal])

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
                Видалення {from === 'city' ? 'міста' : 'факультету'}
              </h5>
              <p>Будуть видалені всі матеріали та інформація про {from === 'city' ? 'місто' : 'факультет'}</p>
              <div className="d-flex justify-content-center">
                <Button
                  title="Ні"
                  type="button"
                  data-bs-dismiss="modal"
                  isGray={true}
                  callback={() => setClickModal('')}
                />
                <Button title="Так" type="button" data-bs-dismiss="modal" callback={() => setClickModal('')} />
              </div>
            </>
          ) : (
            <>
              <Img src={edit} alt="" width="40" />
              <h5 class="modal-title" id="exampleModalLabel">
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
                  callback={() => setClickModal('')}
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
