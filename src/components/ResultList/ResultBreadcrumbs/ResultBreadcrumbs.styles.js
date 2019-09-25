import styled from "styled-components";

const ResultBreadcrumbsStyles = styled.div`
  display: grid;
  justify-items: start;
  grid-template-columns: 1fr min-content;
  padding-top: 23px;
  margin-bottom: 10px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    width: 100%;
    height: 10px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 100;
  }
  .breadcrumbs {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: min-content auto;
    grid-gap: 10px;
    width: 100%;
    margin-left: 10px;
    opacity: ${props => (props.view === "search" ? "1" : "0.75")};
  }
  .result__count {
    font-size: ${props => props.theme.default.smallFontSize};
    white-space: nowrap;
  }

  .breadcrumb__list {
    display: flex;
    flex-wrap: wrap;
  }

  .breadcrumb__item {
    align-items: center;
    background: ${props => props.theme.default.paleGray};
    color: ${props => props.theme.default.black};
    border-radius: 3px;
    display: grid;
    grid-gap: 5px;
    grid-auto-flow: column;
    grid-template-columns: min-content;
    font-size: ${props => props.theme.default.smallFontSize};

    padding-left: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .breadcrumb__label {
    white-space: nowrap;
    margin-right: ${props => (props.view === "search" ? "0px" : "5px")};
  }

  .breadcrumb__close {
    background: none;
    border: none;
    outline: none;
    display: ${props => (props.view === "search" ? "inline" : "none")};
  }

  .breadcrumb__close__icon {
    color: ${props => props.theme.default.gray};
  }

  .clear__filter__button {
    color: ${props => props.theme.default.blue};
    white-space: nowrap;
    border: none;
    background: none;
    font-size: ${props => props.theme.default.smallFontSize};
    display: flex;
    flex-direction: column;
    outline: none;
  }

  .map__toggle {
    opacity: ${props => (props.selectedUser ? "0" : "1")};
    white-space: nowrap;
    align-items: center;
    align-self: flex-start;
    background: none;
    border: none;
    display: flex;
    flex-direction: ${props =>
      props.view === "search" ? "row" : "row-reverse"};
    justify-content: space-between;
    outline: none;
    padding-left: ${props => (props.view === "search" ? "0" : "10px")};
  }

  .map__toggle__label {
    color: ${props => props.theme.default.blue};
    font-size: ${props => props.theme.default.smallFontSize};
    margin-right: ${props => (props.view === "search" ? "10px" : "0")};
    margin-left: ${props => (props.view === "search" ? "0" : "10px")};
  }

  .map__toggle__icon {
    font-size: ${props => props.theme.default.smallFontSize};
    color: ${props => props.theme.default.blue};

    transform: rotate(
      ${props => (props.view === "search" ? "0deg" : "180deg")}
    );
  }
`;

export default ResultBreadcrumbsStyles;
