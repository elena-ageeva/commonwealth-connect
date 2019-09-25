// DEPENDENCIES
import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

// STATE
import { useStateValue } from "../../state";

// STYLES
import ResultListStyles from "./ResultList.styles";

// COMPONENTS
import ResultBreadcrumbs from "./ResultBreadcrumbs/ResultBreadcrumbs";
import ResultItem from "./ResultItem/ResultItem";
import { Loader } from "../";
import { getDisplayName } from "../../util/util";

export default function ResultList() {
  const [{ directory }] = useStateValue();
  const [currentResults, setCurrentResults] = useState(undefined);
  const [activeSort, setActiveSort] = useState(undefined);
  const [sortDirection, setSortDirection] = useState("desc");
  const searchDuration = 1500;
  let directoryLocal = [...directory];

  useEffect(() => {
    if (directoryLocal) {
      if (activeSort) {
        const toSort = [...directoryLocal];
        toSort.sort((a, b) => {
          if (sortDirection === "asc") {
            if (
              a["Contact Information"][activeSort].value.toUpperCase() <
              b["Contact Information"][activeSort].value.toUpperCase()
            ) {
              return -1;
            }
            if (
              getDisplayName(a).toUpperCase() > getDisplayName(b).toUpperCase()
            ) {
              return 1;
            }
          } else if (sortDirection === "desc") {
            if (
              a["Contact Information"][activeSort].value.toUpperCase() >
              b["Contact Information"][activeSort].value.toUpperCase()
            ) {
              return -1;
            }
            if (
              getDisplayName(a).toUpperCase() < getDisplayName(b).toUpperCase()
            ) {
              return 1;
            }
          }
          return 0;
        });
        setCurrentResults(toSort);
      } else {
        setTimeout(() => {
          setCurrentResults([...directoryLocal]);
        }, searchDuration);
      }
    }
  }, [directoryLocal, activeSort, sortDirection]);

  function updateSortOrder(sortBy) {
    if (sortBy === activeSort) {
      setSortDirection(sortDirection === "desc" ? "asc" : "desc");
    } else {
      setSortDirection("asc");
    }
    setActiveSort(sortBy);
  }
  return (
    <ResultListStyles>
      <ResultBreadcrumbs
        count={currentResults === undefined ? 0 : currentResults.length}
      ></ResultBreadcrumbs>

      <Scrollbars
        style={{ width: "100%", position: "relative" }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        {currentResults === undefined && (
          <Loader message="Loading Search Results" />
        )}
        <div className="results">
          <table className="results__table" cellPadding="5">
            <thead>
              <tr>
                <th></th>
                <th>
                  <button
                    className={`table__sort__button ${activeSort === "name" &&
                      "active"}`}
                    onClick={() => {
                      updateSortOrder("name");
                    }}
                  >
                    Name
                    {activeSort === "name" && (
                      <FontAwesomeIcon
                        className="column__sort__icon"
                        icon={sortDirection === "asc" ? faCaretUp : faCaretDown}
                      />
                    )}
                  </button>
                </th>
                <th>
                  <button
                    className={`table__sort__button ${activeSort ===
                      "Practice Name" && "active"}`}
                    onClick={() => {
                      updateSortOrder("Practice Name");
                    }}
                  >
                    Practice Name
                    {activeSort === "Practice Name" && (
                      <FontAwesomeIcon
                        className="column__sort__icon"
                        icon={sortDirection === "asc" ? faCaretUp : faCaretDown}
                      />
                    )}
                  </button>
                </th>
                <th>
                  <button
                    className={`table__sort__button ${activeSort === "Email" &&
                      "active"}`}
                  >
                    Email
                  </button>
                </th>
                <th>
                  <button
                    className={`table__sort__button ${activeSort === "Phone" &&
                      "active"}`}
                  >
                    Phone
                  </button>
                </th>
                <th>
                  <button
                    className={`table__sort__button ${activeSort ===
                      "Distance" && "active"}`}
                  >
                    Distance
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentResults !== undefined &&
                currentResults.map((user, index) => {
                  return (
                    <ResultItem
                      key={user.id}
                      index={index}
                      user={user}
                    ></ResultItem>
                  );
                })}
            </tbody>
          </table>
        </div>
      </Scrollbars>
      <div className="result__count__wrapper">
        {currentResults !== undefined && (
          <span>{`Showing ${currentResults.length} results`}</span>
        )}
      </div>
    </ResultListStyles>
  );
}
