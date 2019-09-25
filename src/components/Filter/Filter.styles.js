import styled from "styled-components";

const FilterStyles = styled.div`
  color: ${props => props.theme.default.black};
  display: grid;
  grid-template-rows: min-content 1fr;
  height: 100%;
  padding-top: 10px;
  border-right: 1px solid ${props => props.theme.default.lightestGray};
  .filter__sections {
    padding-right: 15px;
    pointer-events: all;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: min-content;
    grid-gap: 20px;
    padding-bottom: 50px;
  }
`;

export default FilterStyles;
