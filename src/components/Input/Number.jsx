import React from "react";
import NumberStyles from "./styles/Number.styles";

export default function Number({ label, value }) {
  return (
    <NumberStyles>
      {label}
      <input type="number" step="1" />
    </NumberStyles>
  );
}
