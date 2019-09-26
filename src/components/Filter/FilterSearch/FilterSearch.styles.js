import styled from "styled-components";

const FilterSearchStyles = styled.div`
  margin-bottom: 13px;
  padding-right: 15px;
  display: grid;
  grid-auto-flow: row;

  .input__wrapper {
    align-items: center;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    grid-template-columns: min-content 1fr;
    margin: 10px 0;
  }

  .search__icon {
    font-size: 20px;
  }
  .search__button {
    border: none;
    color: ${props => props.theme.default.black};
    font-size: ${props => props.theme.default.baseFontSize};
    border-radius: 5px;
    justify-self: end;
    background: ${props => props.theme.default.paleGray};
  }
`;

export default FilterSearchStyles;
