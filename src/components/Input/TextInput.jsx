// DEPENDENCIES
import React from "react";

// STYLES
import { TextInputStyles } from "./styles";

export default function TextInput({
  placeholder,
  borderless,
  label,
  justify,
  value,
  onChange,
  section,
  item
}) {
  return (
    <TextInputStyles
      borderless={borderless}
      hasLabel={label !== undefined}
      justify={justify}
    >
      {label}
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value, section, item)}
        placeholder={placeholder}
        autoComplete="off"
      />
    </TextInputStyles>
  );
}
