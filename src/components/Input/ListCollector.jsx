import React from "react";
import styled from "styled-components";

import { FilteredList } from ".";

const ListCollectorStyles = styled.div`
  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  .collector {
    height: 100%;
    display: grid;
    grid-template-rows: min-content 1fr;
  }
`;

export default function ListCollector({ items, label }) {
  return (
    <ListCollectorStyles>
      <FilteredList items={items} type="breadcrumb" />
      <div className="collector">
        <span>Selected {label}</span>
        <div className="collector__box"></div>
      </div>
    </ListCollectorStyles>
  );
}
