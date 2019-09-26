import React, { useState, useEffect } from "react";
import { DistanceStyles } from "./styles";

import { useStateValue } from "../../state";


import { TextInput } from ".";

export default function Distance({ values, onChange }) {

  function updateMiles(value) {
    let newValue = value;
    if (newValue > 250) {
      newValue = 250
    }
    onChange({ miles: newValue, location: values.location });
  }
  function updateZip(value) {
    onChange({ miles: values.miles, location: value });
  }
  return (
    <DistanceStyles>
      <TextInput
        name="miles"
        value={values.miles}
        onChange={updateMiles}
        placeholder="25"
        label="Within"
        justify="center"
      />
      <TextInput
        name="location"
        value={values.location}
        onChange={updateZip}
        placeholder="02453"
        label="miles of:"
        justify="center"
      />
    </DistanceStyles>
  );
}
