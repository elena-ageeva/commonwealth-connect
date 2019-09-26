// DEPENDENCIES
import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faTimes } from "@fortawesome/free-solid-svg-icons";

// STATE
import { useStateValue } from "../../../state";

// STYLES
import ResultBreadcrumbStyles from "./ResultBreadcrumbs.styles";

export default function ResultBreadcrumbs({ count }) {
  const [{ view, selectedUser, filters }, dispatch] = useStateValue();

  function toggleView() {
    dispatch({
      type: "toggleView",
      view: view === "search" ? "map" : "search"
    });
  }

  function clearFilter(section, value) {
    if (section === "searchTerm") {
      dispatch({
        type: "clearSearchTerm"
      });
    } else if (section !== "Distance") {
      const newFilters = filters[section].filter(filterItem => filterItem !== value);
      dispatch({
        type: "updateFilters",
        section,
        newFilters: newFilters.length > 0 ? newFilters : undefined
      });
    } else {
      dispatch({
        type: "clearDistance"
      });
    }
  }

  function clearFilters() {
    dispatch({
      type: "clearFilters"
    });
  }

  function renderBreadcrumbs() {
    const breadCrumbs = [];
    Object.keys(filters).forEach(filterKey => {
      switch (filterKey) {
        case "searchTerm":
          const value = filters.searchTerm;
          if (value && value.length > 0) {
            breadCrumbs.push({
              displayValue: `Where first, last, or practice name includes ${value}`,
              section: filterKey,
              value
            });
          }
          break;
        case "Distance":
          if (filters[filterKey]) {
            breadCrumbs.push({
              displayValue: `Within ${filters[filterKey].miles} miles of ${
                filters[filterKey].location
                }`,
              section: filterKey
            });
          }
          break;
        case "Audience":
          filters[filterKey] && filters[filterKey].forEach(value => {
            breadCrumbs.push({
              displayValue: value,
              section: filterKey,
              value
            });
          });
          break;
        case "Practice Size":
          filters[filterKey] && filters[filterKey].forEach(value => {
            breadCrumbs.push({
              displayValue: `With a Practice Size of ${value}`,
              section: filterKey,
              value
            });
          });
          break;
        case "OSJ Designation":
          filters[filterKey] && filters[filterKey].forEach(value => {
            breadCrumbs.push(
              value === "Yes"
                ? { displayValue: "Who are an OSJ", section: filterKey, value }
                : {
                  displayValue: "Who are not an OSJ",
                  section: filterKey,
                  value
                }
            );
          });
          break;
        case "Tenure":
          filters[filterKey] && filters[filterKey].forEach(value => {
            breadCrumbs.push({
              displayValue: `With a tenure of ${value}`,
              section: filterKey,
              value
            });
          });
          break;
        case "Job Responsibilities":
          filters[filterKey] && filters[filterKey].forEach(value => {
            breadCrumbs.push({
              displayValue: `Responsible for ${value}`,
              section: filterKey,
              value
            });
          });
          break;
        case "Production":
          filters[filterKey] && filters[filterKey].forEach(value => {
            breadCrumbs.push({
              displayValue: `With a Production of ${value}`,
              section: filterKey,
              value
            });
          });
          break;
        case "Affiliation Model":
          filters[filterKey] && filters[filterKey].forEach(value => {
            breadCrumbs.push({
              displayValue: `With an Affiliation Model of ${value}`,
              section: filterKey,
              value
            });
          });
          break;
        case "Business Interests":
          filters[filterKey] && filters[filterKey].forEach(value => {
            breadCrumbs.push({
              displayValue: `Interested in ${value}`,
              section: filterKey,
              value
            });
          });
          break;
        case "Business Niche":
          filters[filterKey] && filters[filterKey].forEach(value => {
            breadCrumbs.push({
              displayValue: `Who work with ${value}`,
              section: filterKey,
              value
            });
          });
          break;
        case "Personal Interests":
          filters[filterKey] && filters[filterKey].forEach(value => {
            breadCrumbs.push({
              displayValue: `Interested in ${value}`,
              section: filterKey,
              value
            });
          });
          break;
        default:
          break;
      }
    });
    const renderedBreadcrumbs = breadCrumbs.map(breadCrumb => {
      return (
        <div key={breadCrumb.displayValue} className="breadcrumb__item">
          <span className="breadcrumb__label">{breadCrumb.displayValue}</span>
          <button
            onClick={() => clearFilter(breadCrumb.section, breadCrumb.value)}
            className="breadcrumb__close"
          >
            <FontAwesomeIcon
              className="breadcrumb__close__icon"
              icon={faTimes}
            />
          </button>
        </div>
      );
    });
    return renderedBreadcrumbs;
  }

  return (
    <ResultBreadcrumbStyles view={view} selectedUser={selectedUser}>
      <div className="breadcrumbs">
        <span className="result__count">{`Showing ${count} results:`}</span>
        <div className="breadcrumb__list">
          {renderBreadcrumbs()}
          {view === "search" && (
            <button onClick={clearFilters} className="clear__filter__button">
              Clear All
            </button>
          )}
        </div>
      </div>
      <button onClick={toggleView} className="map__toggle">
        <span className="map__toggle__label">
          {view === "search" ? "Enlarge Map" : "Back to filters"}
        </span>
        <FontAwesomeIcon className="map__toggle__icon" icon={faCaretRight} />
      </button>
    </ResultBreadcrumbStyles>
  );
}
