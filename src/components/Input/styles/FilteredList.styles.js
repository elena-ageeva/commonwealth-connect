import styled from "styled-components";

const FilteredListStyles = styled.div`
  .item__list {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: min-content;
    grid-gap: 3px;
    height: auto;
  }
  .highlighted__text {
    background: ${props => props.theme.default.blue};
    color: white;
  }
`;

export default FilteredListStyles;
