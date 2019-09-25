// DEPENDENCIES
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// STATE
import { useStateValue } from "../../../state";

// STYLES
import FilterSearchStyles from "./FilterSearch.styles";

import { TextInput } from "../../Input";

export default function FilterSearch() {
  const [{ filters }, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState(filters.searchTerm || "");
  function handleSearchTerm(value) {
    setSearchTerm(value);
  }
  function search() {
    dispatch({
      type: "setSearchTerm",
      searchTerm
    });
  }
  return (
    <FilterSearchStyles>
      <div className="input__wrapper">
        <FontAwesomeIcon className="search__icon" icon={faSearch} />
        <TextInput
          placeholder="Search by first, last, or practice name"
          borderless
          value={searchTerm}
          onChange={handleSearchTerm}
        ></TextInput>
        <button onClick={search} className="search__button">
          Search
        </button>
      </div>
    </FilterSearchStyles>
  );
}
