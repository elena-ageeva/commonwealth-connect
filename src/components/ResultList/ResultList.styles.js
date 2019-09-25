import styled from "styled-components";

const ResultListStyles = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: min-content 1fr min-content;
  height: 100%;

  .results {
    /* padding-right: 15px; */
    width: 100%;
  }

  .results__table {
    margin-right: 20px;
    width: 100%;
    position: relative;
    /* z-index: 99; */
  }

  .results__table th {
    color: ${props => props.theme.default.lightGray};
    text-transform: uppercase;
    font-size: ${props => props.theme.default.largerFontSize};
    font-weight: 300;
  }

  .table__sort__button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    outline: none;
    letter-spacing: 1.3px;
    white-space: nowrap;
    color: ${props => props.theme.default.lightGray};
    text-transform: uppercase;
    font-size: ${props => props.theme.default.largerFontSize};
    position: relative;
  }

  .column__sort__icon {
    color: ${props => props.theme.default.lightGray};
    position: absolute;
    right: -10px;
    top: 3px;
  }

  .active {
    font-weight: bold;
    letter-spacing: 0.9px;
  }

  .result__count__wrapper {
    align-items: center;
    display: flex;
    height: 50px;
    font-size: ${props => props.theme.default.smallFontSize};
    justify-content: center;
    position: relative;
  }
  .result__count__wrapper::before {
    content: "";
    position: absolute;
    top: -10px;
    width: 100%;
    height: 10px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 100;
  }

  tbody {
    position: relative;
  }

  .loading__icon {
    position: absolute;
    top: calc(50% - 40px);
    left: calc(50% - 40px);
    width: 80px;
  }
`;

export default ResultListStyles;
