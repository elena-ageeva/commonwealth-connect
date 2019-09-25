import styled from "styled-components";

const CheckboxStyles = styled.label`
  /* align-items: center; */
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  font-size: ${props => props.theme.default.baseFontSize};
  justify-content: flex-end;
  padding-left: 18px;
  position: relative;
  user-select: none;
  /* white-space: nowrap; */

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  input {
    cursor: pointer;
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  }

  .checkmark {
    background-color: white;
    border: 1px solid ${props => props.theme.default.lightGray};
    height: 14px;
    left: 0;
    position: absolute;
    top: 1px;
    width: 14px;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
    border: 1px solid ${props => props.theme.default.blue};
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: white;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    display: none;
    position: absolute;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    border: solid ${props => props.theme.default.lightGray};
    border-width: 0 2px 2px 0;
    height: 8.5px;
    left: 3.5px;
    top: 1px;
    width: 5px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
  }
`;

export default CheckboxStyles;
