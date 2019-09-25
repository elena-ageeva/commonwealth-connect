import styled from "styled-components";

const ResultItemStyles = styled.tr`
  height: 75px;
  position: relative;
  font-size: ${props => props.theme.default.smallFontSize};
  cursor: ${props => (props.selected ? "default" : "pointer")};

  background: ${props =>
    props.selected ? props.theme.default.darkWhite : "none"};

  td:last-child::after {
    display: ${props => (props.selected ? "default" : "none")};
    width: 0;
    height: 0;
    border-top: 37.5px solid white;
    border-bottom: 37.5px solid white;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    border-left: 60px solid ${props => props.theme.default.darkWhite};
  }

  td:last-child {
    position: relative;
  }

  &:hover {
    background: ${props => props.theme.default.darkWhite};
  }
  &:hover > td:last-child::after {
    width: 0;
    height: 0;
    border-top: 37.5px solid white;
    border-bottom: 37.5px solid white;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    border-left: 60px solid ${props => props.theme.default.darkWhite};
  }

  .clickable {
    color: ${props => props.theme.default.blue};
    cursor: pointer;
  }
  .clickable:hover {
    text-decoration: underline;
  }
  .phone__cell {
    /* justify-content: center; */
    display: grid;
    grid-gap: 3px;
    flex-direction: column;
  }
  .result__image {
    border-radius: 50%;
    /* margin: 0 5px; */
    /* width: 50px; */
  }
  .result__name {
    font-size: ${props => props.theme.default.largerFontSize};
    font-weight: bold;
  }
`;

export default ResultItemStyles;
