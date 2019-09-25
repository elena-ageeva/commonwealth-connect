// DEPENDENCIES
import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// STATE
import { useStateValue } from "../../../state";

// STYLES
import FilterSectionStyles from "./FilterSection.styles";

import { Checkbox, Distance, FilteredList } from "../../Input";

import { filterSchema } from "./filterSchema";

export default function FilterSection({ title, active }) {
  const [{ filters }, dispatch] = useStateValue();
  const [expanded, setExpanded] = useState(active || false);
  const [localFilters, updateLocalFilters] = useState([]);
  const [distance, setDistance] = useState(filters[Distance] || []);

  function applyFilter() {
    if (title !== "Distance") {
      dispatch({
        type: "updateFilters",
        section: title,
        newFilters: localFilters
      });
    } else {
      dispatch({
        type: "updateDistance",
        newDistance: distance
      });
    }
  }

  function changeFilter(ev) {
    if (ev.target.checked) {
      updateLocalFilters([...localFilters, ev.target.name]);
    } else {
      updateLocalFilters(
        [...localFilters].filter(filterItem => filterItem !== ev.target.name)
      );
    }
  }

  function updateDistance(...args) {
    setDistance(args);
  }

  useEffect(() => {
    updateLocalFilters([...filters[title]]);
  }, [filters]);

  function renderCheckbox(option, index) {
    return (
      <Checkbox
        checked={localFilters.indexOf(option) > -1}
        key={`${title} checkbox ${index}`}
        label={option}
        onChange={changeFilter}
      />
    );
  }

  function renderFilteredList() {
    return (
      <FilteredList
        onChange={changeFilter}
        section={title}
        values={localFilters}
        placeholder={filterSchema[title].placeholder}
        key={`${title} filtered list`}
        items={filterSchema[title].items}
      />
    );
  }

  function renderFilter() {
    switch (title) {
      case "Audience":
        return filterSchema[title].options.map((option, index) => {
          return renderCheckbox(option, index);
        });
      case "Distance":
        return (
          <Distance
            values={distance}
            onChange={updateDistance}
            key="distance"
          />
        );
      case "Practice Size":
        return filterSchema[title].options.map((option, index) => {
          return renderCheckbox(option, index);
        });
      case "OSJ Designation":
        return filterSchema[title].options.map((option, index) => {
          return renderCheckbox(option, index);
        });
      case "Tenure":
        return filterSchema[title].options.map((option, index) => {
          return renderCheckbox(option, index);
        });
      case "Job Responsibilities":
        return renderFilteredList();
      case "Production":
        return filterSchema[title].options.map((option, index) => {
          return renderCheckbox(option, index);
        });
      case "Affiliation Model":
        return filterSchema[title].options.map((option, index) => {
          return renderCheckbox(option, index);
        });
      case "Business Interests":
        return renderFilteredList();
      case "Business Niche":
        return renderFilteredList();
      case "Personal Interests":
        return renderFilteredList();
      default:
        break;
    }
  }
  return (
    <FilterSectionStyles expanded={expanded}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="section__title__wrapper"
      >
        <span className="section__title">{title}</span>
        <FontAwesomeIcon className="expand__icon" icon={faCaretDown} />
      </button>
      <div className="filter__content">{renderFilter()}</div>
      {expanded && (
        <button onClick={applyFilter} className="filter__apply__button">
          Apply
        </button>
      )}
    </FilterSectionStyles>
  );
}
