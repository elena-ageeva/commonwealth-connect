import styled from "styled-components";
import { animated } from "react-spring";

const FlyoutStyles = styled(animated.div)`
  border-radius: ${props => (props.location === "/" ? "10px" : "0px")};
  width: 100%;
  position: absolute;
  z-index: 1000;
  height: ${props => (props.location === "/" ? "calc(100% - 50px)" : "100%")};
  max-height: ${props =>
    props.location === "/" ? "calc(100% - 50px)" : "100%"};
  overflow-y: auto;
  top: ${props => (props.location === "/" ? "25px" : "0px")};
  left: ${props => (props.location === "/" ? "25px" : "0px")};
  background: ${props => props.theme.default.darkWhite};
  box-shadow: ${props =>
    props.location === "/" ? "0px 0px 10px rgba(0,0,0,.5)" : "none"};

  font-size: ${props => props.theme.default.baseFontSize};
  width: ${props => (props.location === "/" ? "calc(100% - 50px)" : "100%")};

  display: grid;
  grid-auto-flow: row;
  grid-gap: 20px;
  grid-auto-rows: min-content 1fr;
  /* HEADER */
  .flyout__header {
    align-items: center;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 50px 1fr;
    padding: 20px;
    position: relative;
  }
  .flyout__close__button {
    pointer-events: all;
    background: none;
    border: none;
    right: 10px;
    top: 10px;
    color: ${props => props.theme.default.gray};
    font-size: ${props => props.theme.default.enormousFontSize};
    position: absolute;
  }
  .hidden__flyout__item {
    opacity: 0.25;
  }
  .user__info {
  }
  .user__name__wrapper {
  }
  .user__name {
    font-weight: 600;
    font-size: ${props => props.theme.default.hugeFontSize};
  }
  .user__info__controls {
  }
  .user__practice {
  }

  /* SECTION */
  .flyout__section {
    padding: 0px 20px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: min-content 1fr;
    margin-bottom: 20px;
  }
  .flyout__content {
    background: none;
    padding: none;
    outline: none;
    border: none;
    align-self: start;
    text-align: left;
  }
  .flyout__section:last-child {
    margin-bottom: 75px;
  }
  .flyout__section__title {
    color: ${props => props.theme.default.lightGray};
    background: none;
    padding: none;
    outline: none;
    border: none;
    align-self: start;
    text-align: left;
    text-transform: uppercase;
  }
  .flyout__section__list {
    display: flex;
    flex-direction: column;
  }
  .flyout__section__link {
    cursor: ${props => (props.location === "/profile" ? "pointer" : "default")};
  }
  .flyout__section__link:hover {
    text-decoration: ${props =>
      props.location === "/profile" ? "underline" : "none"};
  }
  .flyout__section__item {
    display: grid;
    grid-auto-flow: column;
    transition: all 200ms ease;
  }
  .flyout__section__item--row {
    grid-auto-flow: row;
  }
  .flyout__section__item--spaced {
    margin-top: 10px;
  }
`;

export default FlyoutStyles;
