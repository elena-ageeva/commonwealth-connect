import styled from "styled-components";

const TextInputStyles = styled.label`
  align-items: center;
  margin: 0;
  width: 100%;
  display: flex;
  white-space: nowrap;
  font-size: ${props => props.theme.default.baseFontSize};

  input {
    border: ${props => (props.borderless ? "none" : "default")};
    margin-left: ${props => (props.hasLabel ? "5px" : "0px")};
    width: 100%;
    min-width: 3rem;
    padding-left: ${props => (props.justify ? "0" : "5px")};
    text-align: ${props => props.justify || "left"};
  }
`;

export default TextInputStyles;
