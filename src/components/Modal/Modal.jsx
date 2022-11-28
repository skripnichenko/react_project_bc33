import warning from "../../assets/warning.svg";
import Button from "../Button/Button";
import { Img } from "./Modal.styled";

const Modal = () => {
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
        </div>
      </div>
    </div>
  );
};
export default Modal;
