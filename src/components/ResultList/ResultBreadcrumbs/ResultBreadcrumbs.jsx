// DEPENDENCIES
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faTimes } from "@fortawesome/free-solid-svg-icons";

// STATE
import { useStateValue } from "../../../state";

// STYLES
import ResultBreadcrumbStyles from "./ResultBreadcrumbs.styles";

export default function ResultBreadcrumbs({ count }) {
  const [{ view, selectedUser }, dispatch] = useStateValue();

  function toggleView() {
    dispatch({
      type: "toggleView",
      view: view === "search" ? "map" : "search"
    });
  }

  return (
    <ResultBreadcrumbStyles view={view} selectedUser={selectedUser}>
      {/* {view === "search" && ( */}
      <div className="breadcrumbs">
        <span className="result__count">{`Showing ${count} results:`}</span>
        <div className="breadcrumb__list">
          <div className="breadcrumb__item">
            <span className="breadcrumb__label">Advisors</span>
            <button className="breadcrumb__close">
              <FontAwesomeIcon
                className="breadcrumb__close__icon"
                icon={faTimes}
              />
            </button>
          </div>
          <div className="breadcrumb__item">
            <span className="breadcrumb__label">
              Within 25 miles of 02453
              </span>
            <button className="breadcrumb__close">
              <FontAwesomeIcon
                className="breadcrumb__close__icon"
                icon={faTimes}
              />
            </button>
          </div>
          {view === "search" &&
            <button className="clear__filter__button">Clear All</button>
          }
        </div>
      </div>
      {/* )} */}
      <button onClick={toggleView} className="map__toggle">
        <span className="map__toggle__label">
          {view === "search" ? "Enlarge Map" : "Back to filters"}
        </span>
        <FontAwesomeIcon className="map__toggle__icon" icon={faCaretRight} />
      </button>
    </ResultBreadcrumbStyles>
  );
}
