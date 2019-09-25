import styled from "styled-components";

const FilterSectionStyles = styled.div`
  /* padding-bottom: 20px; */
  position: relative;
  .section__title__wrapper {
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    outline: none;
    padding: 0;
    width: 100%;
    margin-bottom: 5px;
  }

  .section__title {
    color: ${props => props.theme.default.lightGray};
    font-weight: bold;
    font-size: ${props => props.theme.default.largerFontSize};
  }

  .expand__icon {
    color: ${props => props.theme.default.lightGray};
    transform: rotate(${props => (props.expanded ? "180deg" : "0deg")});
    transition: 200ms all ease-in-out;
  }

  .filter__content {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: min-content;
    grid-gap: 3px;
    overflow: hidden;
    height: ${props => (props.expanded ? `auto` : "0px")};
    transition: 200ms all ease-in-out;
  }
  .filter__apply__button {
    background: none;
    outline: none;
    border: none;
    color: ${props => props.theme.default.blue};
    font-size: ${props => props.theme.default.smallFontSize};
    bottom: -20px;
    right: 0;
    position: absolute;
  }
`;

export default FilterSectionStyles;
