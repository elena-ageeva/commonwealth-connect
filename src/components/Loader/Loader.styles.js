import styled from "styled-components";

const LoaderStyles = styled.div`
  display: grid;
  grid-template-columns: 200px;
  grid-template-rows: 80px min-content;
  justify-items: center;
  grid-gap: 10px;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 100px);
  .loader__image {
    width: 80px;
    height: 100%;
  }
  .loader__message {
    color: ${props => props.theme.default.blue};
    font-size: ${props => props.theme.default.baseFontSize};
    font-weight: 600;
    white-space: nowrap;
  }
`;

export default LoaderStyles;
