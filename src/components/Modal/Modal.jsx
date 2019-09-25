// DEPENDENCIES
import React from "react";

// STATE
import { useStateValue } from "../../state";

// STYLES
import ModalStyles from "./Modal.styles";

export default function Modal() {
  const [{ modal }, dispatch] = useStateValue();
  return (
    <ModalStyles size="lg" centered show={modal.show}>
      <ModalStyles.Body centered="true">
        <h4 className="text-center modal__title">{modal.title}</h4>
        <p className="text-center modal__message">{modal.message}</p>
        <div className="modal__controls">
          <button
            className="modal__control"
            onClick={() => {
              dispatch({
                type: "closeModal"
              });
            }}
          >
            Sounds great!
          </button>
        </div>
      </ModalStyles.Body>
    </ModalStyles>
  );
}
