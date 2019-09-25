// DEPENDENCIES
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// STYLES
import FilterSectionStyles from "./FilterSection.styles";

export default function FilterSection({ title, children }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <FilterSectionStyles expanded={expanded}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="section__title__wrapper"
      >
        <span className="section__title">{title}</span>
        <FontAwesomeIcon className="expand__icon" icon={faCaretDown} />
      </button>
      <div className="filter__content">{children}</div>
      {expanded && <button className="filter__apply__button">Apply</button>}
    </FilterSectionStyles>
  );
}
