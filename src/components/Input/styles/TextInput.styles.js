import styled from "styled-components";

const TextInputStyles = styled.label`
  align-items: center;
  margin: 0;
  width: 100%;
  display: flex;
  white-space: nowrap;
  font-size: ${props => props.theme.default.baseFontSize};
  padding: 0;
  align-self: center;
  input {
    margin: 0;
    border: ${props =>
      props.borderless ? "1px solid rgba(0,0,0,0)" : "1px solid #E9E9E9"};
    margin-left: ${props => (props.hasLabel ? "5px" : "0px")};
    width: 100%;
    min-width: 3rem;
    padding-left: ${props => (props.justify ? "0" : "5px")};
    text-align: ${props => props.justify || "left"};
    transition: all 100ms ease;
  }
  input:focus {
    border: 1px solid #707070;
    outline: none;
  }
`;

export default TextInputStyles;
