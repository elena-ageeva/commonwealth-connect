import React, { useState } from "react";
import { DistanceStyles } from "./styles";

import { TextInput } from ".";

export default function Distance() {
  const [miles, setMiles] = useState("");
  const [zip, setZip] = useState("");
  return (
    <DistanceStyles>
      <TextInput
        value={miles}
        onChange={setMiles}
        placeholder="25"
        label="Within"
        justify="center"
      />
      <TextInput
        value={zip}
        onChange={setZip}
        placeholder="02453"
        label="miles of:"
        justify="center"
      />
    </DistanceStyles>
  );
}
