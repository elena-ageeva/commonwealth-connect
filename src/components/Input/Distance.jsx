import React, { useState, useEffect } from "react";
import { DistanceStyles } from "./styles";

import { TextInput } from ".";

export default function Distance({ values, onChange }) {
  const [miles, setMiles] = useState(values[0]);
  const [zip, setZip] = useState(values[1]);
  useEffect(() => {
    onChange(miles, zip);
  }, [zip, miles]);
  return (
    <DistanceStyles>
      <TextInput
        name="miles"
        value={miles}
        onChange={setMiles}
        placeholder="25"
        label="Within"
        justify="center"
      />
      <TextInput
        name="location"
        value={zip}
        onChange={setZip}
        placeholder="02453"
        label="miles of:"
        justify="center"
      />
    </DistanceStyles>
  );
}
