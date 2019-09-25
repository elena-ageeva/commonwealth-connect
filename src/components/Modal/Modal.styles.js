import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

const ModalStyles = styled(Modal)`
  .modal__title {
    font-size: ${props => props.theme.default.enormousFontSize};
    font-weight: 600;
    margin-bottom: 30px;
  }

  .modal__message {
    font-size: ${props => props.theme.default.largerFontSize};
    margin-bottom: 30px;
  }

  .modal__controls {
    display: grid;
    grid-auto-flow: column;
    width: 100%;
    justify-content: center;
    justify-items: center;
  }

  .modal__control {
    background: ${props => props.theme.default.lightGray};
    border: none;
    border-radius: 3px;
    color: white;
    padding: 10px;
    font-size: ${props => props.theme.default.baseFontSize};
    font-weight: 600;
  }
`;

export default ModalStyles;
