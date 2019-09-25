import styled from "styled-components";

const FilterSearchStyles = styled.div`
  margin-bottom: 13px;
  padding-right: 15px;
  .search__limits {
    display: grid;
    grid-auto-columns: min-content;
    grid-auto-flow: column;
    grid-gap: 20px;
  }

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
`;

export default FilterSearchStyles;
