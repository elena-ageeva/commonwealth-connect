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
  function search(ev) {
    ev.preventDefault()
    dispatch({
      type: "setSearchTerm",
      searchTerm
    });
  }
  return (
    <FilterSearchStyles>
      <form className="input__wrapper" onSubmit={search}>
        <FontAwesomeIcon className="search__icon" icon={faSearch} />
        <TextInput
          placeholder="first, last, or practice name"
          borderless
          value={searchTerm}
          onChange={handleSearchTerm}
        ></TextInput>
      </form>
      <button onClick={search} className="search__button">
        Search
        </button>
    </FilterSearchStyles>
  );
}
