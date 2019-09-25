import React from "react";
import styled from "styled-components";

import { Checkbox } from "../Input";
import { lists } from "./lists";

const CheckboxalypseStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 5px;
`;

export default function Checkboxalypse({ values, onChange, masterList }) {
  return (
    <CheckboxalypseStyles>
      {lists[masterList].map(item => {
        return (
          <Checkbox
            key={item}
            onChange={onChange}
            label={item}
            checked={values.indexOf(item) > -1}
          />
        );
      })}
    </CheckboxalypseStyles>
  );
}
