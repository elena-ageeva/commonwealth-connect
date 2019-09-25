// DEPENDENCIES
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// STYLES
import FilterSearchStyles from "./FilterSearch.styles";

import { TextInput } from "../../Input";

export default function FilterSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <FilterSearchStyles>
      <div className="input__wrapper">
        <FontAwesomeIcon className="search__icon" icon={faSearch} />
        <TextInput
          placeholder="Search by first, last, or practice name"
          borderless
          value={searchTerm}
          onChange={setSearchTerm}
        ></TextInput>
        <button className="search__button">Search</button>
      </div>
    </FilterSearchStyles>
  );
}
