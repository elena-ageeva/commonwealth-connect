import styled from "styled-components";
import { useTransition, animated } from "react-spring";

const MapStyles = styled.div`
  height: 100%;
  .custom__infobox {
    color: ${props => props.theme.default.black};
    background: white;
    border-radius: 5px;
    padding: 10px;
    display: grid;
    grid-gap: 0px;
    position: absolute;
    top: -45px;
    left: 20px;
  }
  .custom__infobox::after {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    content: "";
    position: absolute;
    left: -10px;
    top: 20px;
    border-right: 10px solid white;
  }

  .custom__infobox__name {
    font-weight: 700;
    white-space: nowrap;
    font-size: ${props => props.theme.default.largerFontSize};
  }

  .custom__infobox__practice {
    font-weight: 400;
    font-size: ${props => props.theme.default.baseFontSize};
  }

  .custom__infobox__address {
    margin-top: 10px;

    color: ${props => props.theme.default.blue};
    cursor: pointer;
    white-space: nowrap;
    font-weight: 400;
    font-size: ${props => props.theme.default.smallFontSize};
  }
  .custom__infobox__address span {
    display: block;
  }

  .custom__infobox__controls {
    margin-top: 10px;
    display: grid;
    justify-content: space-between;
    grid-gap: 10px;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    font-weight: 400;
    color: ${props => props.theme.default.blue};
  }

  .infobox__control {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .infobox__control__label {
    margin-top: 3px;
    font-weight: 600;
    font-size: ${props => props.theme.default.tinyFontSize};
  }

  .infobox__control__icon {
    font-size: ${props => props.theme.default.largerFontSize};
  }

  .office__user__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-top: 10px;
  }

  .user__list__item {
    font-size: ${props => props.theme.default.baseFontSize};
    padding: 0;
    margin: 0;
  }
`;

export default MapStyles;
