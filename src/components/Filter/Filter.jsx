// DEPENDENCIES
import React, { useEffect, useState, useCallback } from "react";
import { Scrollbars } from "react-custom-scrollbars";

// STATE
import { useStateValue } from "../../state";

import { filterUser } from "./filterUtil";

// STYLES
import FilterStyles from "./Filter.styles";

// COMPONENTS
import FilterSearch from "./FilterSearch/FilterSearch";
import FilterSection from "./FilterSection/FilterSection";

export default function Filter() {
  const [{ filters, directory, user }, dispatch] = useStateValue();
  const [filteredResults, setFilteredResults] = useState();

  const setSearchResults = useCallback(() => {
    dispatch({ type: "setSearchResults", searchResults: [...filteredResults] })
  }, [filteredResults, dispatch])

  useEffect(() => {
    if (filters) {
      const activeFilters = Object.keys(filters).filter(filterKey => {
        return filters[filterKey] !== undefined
      })
      if (activeFilters.length > 0) {
        const filteredDirectory = directory.filter(userElement => {
          if (userElement.hidden) {
            return false;
          }
          let include = true;
          for (let i = 0; i < activeFilters.length; i++) {
            include = filterUser(userElement, activeFilters[i], filters[activeFilters[i]], user);
            if (!include) {
              break;
            }
          }
          return include;
        })
        setFilteredResults([...filteredDirectory]);
      } else {
        setFilteredResults([]);
      }
    }
  }, [directory, filters, user])

  useEffect(() => {
    if (filteredResults) {
      setSearchResults();
    }
  }, [filteredResults, setSearchResults])

  return (
    <FilterStyles>
      <FilterSearch></FilterSearch>
      <Scrollbars
        style={{ width: "100%" }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <div className="filter__sections">
          <FilterSection
            active={filters["Audience"]}
            title="Audience"
          />
          <FilterSection
            active={filters["Distance"]}
            title="Distance"
          />
          <FilterSection
            active={filters["Practice Size"]}
            title="Practice Size"
          />
          <FilterSection
            title="OSJ Designation"
            active={filters["OSJ Designation"]}
          />
          <FilterSection title="Tenure" active={filters["Tenure"]} />
          <FilterSection
            active={filters["Job Responsibilities"]}
            title="Job Responsibilities"
          />
          <FilterSection
            active={filters["Production"]}
            title="Production"
            type="checkbox list"
          />
          <FilterSection
            active={filters["Affiliation Model"]}
            title="Affiliation Model"
          />
          <FilterSection
            active={filters["Business Interests"]}
            title="Business Interests"
          />
          <FilterSection
            active={filters["Business Niche"]}
            title="Business Niche"
          />
          <FilterSection
            active={filters["Personal Interests"]}
            title="Personal Interests"
          />
        </div>
      </Scrollbars>
    </FilterStyles>
  );
}
