import React from "react";
import { CheckboxStyles } from "./styles";
import Highlighter from "react-highlight-words";

export default function Checkbox({
  checked,
  label,
  highlight,
  highlightTerm,
  onChange
}) {
  return (
    <CheckboxStyles>
      {highlight ? (
        <Highlighter
          highlightClassName="highlighted__text"
          searchWords={[highlightTerm]}
          autoEscape={true}
          textToHighlight={label}
        />
      ) : (
        label
      )}
      <input
        name={label}
        onChange={onChange}
        checked={checked}
        type="checkbox"
      />
      <span className="checkmark"></span>
    </CheckboxStyles>
  );
}
