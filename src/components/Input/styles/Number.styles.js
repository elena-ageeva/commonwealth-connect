import styled from "styled-components";

const NumberStyles = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  font-size: ${props => props.theme.default.baseFontSize};
  input {
    margin-right: 5px;
    width: 5rem;
  }
`;

export default NumberStyles;
