// COMPONENTS
import { Loader } from "../";
import ResultBreadcrumbs from "./ResultBreadcrumbs/ResultBreadcrumbs";
import ResultItem from "./ResultItem/ResultItem";
import { Scrollbars } from "react-custom-scrollbars";

import { getDistance } from "../../util/util";

// DEPENDENCIES
import React, { useEffect, useState } from "react";

// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faCaretLeft,
  faCaretRight
} from "@fortawesome/free-solid-svg-icons";

// STATE
import { useStateValue } from "../../state";

// STYLED COMPONENTS
import ResultListStyles, { PaginatorStyles } from "./ResultList.styles";

// UTILITIES
import { getDisplayName } from "../../util/util";

export default function ResultList() {
  const [{ directory, searchResults, user }, dispatch] = useStateValue();
  const [currentResults, setCurrentResults] = useState(undefined);
  const [activeSort, setActiveSort] = useState(undefined);
  const [sortDirection, setSortDirection] = useState("desc");
  const [searchDuration, setSearchDuration] = useState(750);
  const [resultPage, setResultPage] = useState(1);
  const [pages, setPages] = useState(undefined);
  const maxPages = 7;
  const [directoryLocal, setPaginatedResults] = useState(
    searchResults.slice(resultPage * 25, (resultPage + 1) * 25)
  );

  useEffect(() => {
    let fakeSave;
    if (searchResults) {
      if (activeSort) {
        const toSort = [...searchResults];
        toSort.sort((a, b) => {
          if (sortDirection === "asc") {
            if (activeSort === "Distance") {
              if (
                getDistance(user, a, "M") < getDistance(user, b, "M")
              ) {
                return -1;
              }
              if (
                getDistance(user, a, "M") > getDistance(user, b, "M")
              ) {
                return 1;
              }
              return 0;
            }
            else if (activeSort === "name") {
              if (
                getDisplayName(a).toUpperCase() <
                getDisplayName(b).toUpperCase()
              ) {
                return -1;
              }
              if (
                getDisplayName(a).toUpperCase() >
                getDisplayName(b).toUpperCase()
              ) {
                return 1;
              }
              return 0;
            } else {
              if (
                a["Contact Information"][activeSort].value.toUpperCase() <
                b["Contact Information"][activeSort].value.toUpperCase()
              ) {
                return -1;
              }
              if (
                getDisplayName(a).toUpperCase() >
                getDisplayName(b).toUpperCase()
              ) {
                return 1;
              }
              return 0;
            }
          }
          if (sortDirection === "desc") {
            if (activeSort === "Distance") {
              if (
                getDistance(user, a, "M") > getDistance(user, b, "M")
              ) {
                return -1;
              }
              if (
                getDistance(user, a, "M") < getDistance(user, b, "M")
              ) {
                return 1;
              }
              return 0;
            } else
              if (activeSort === "name") {
                if (
                  getDisplayName(a).toUpperCase() <
                  getDisplayName(b).toUpperCase()
                ) {
                  return 1;
                }
                if (
                  getDisplayName(a).toUpperCase() >
                  getDisplayName(b).toUpperCase()
                ) {
                  return -1;
                }
                return 0;
              } else {
                if (
                  a["Contact Information"][activeSort].value.toUpperCase() >
                  b["Contact Information"][activeSort].value.toUpperCase()
                ) {
                  return -1;
                }
                if (
                  getDisplayName(a).toUpperCase() <
                  getDisplayName(b).toUpperCase()
                ) {
                  return 1;
                }
                return 0;
              }
          }
        });
        setCurrentResults(
          toSort.slice((resultPage - 1) * 25, resultPage * 25)
        );
      } else {
        fakeSave = setTimeout(() => {
          setPages(Math.ceil(searchResults.length / 25));
          setCurrentResults([...directoryLocal]);
          setSearchDuration(0);
        }, searchDuration);
      }
    }
    return () => {
      window.clearTimeout(fakeSave);
    };
  }, [directoryLocal, activeSort, sortDirection, directory.length, directory, resultPage, searchDuration, searchResults, user]);

  function updateSortOrder(sortBy) {
    if (sortBy === activeSort) {
      setSortDirection(sortDirection === "desc" ? "asc" : "desc");
    } else {
      setSortDirection("asc");
    }
    setActiveSort(sortBy);
  }

  useEffect(() => {
    setPaginatedResults(
      searchResults.slice((resultPage - 1) * 25, resultPage * 25)
    );
  }, [searchResults, resultPage]);

  useEffect(() => {
    setPages(Math.ceil(searchResults.length / 25));
    setResultPage(1);
  }, [searchResults])

  useEffect(() => {
    if (currentResults !== undefined) {
      dispatch({
        type: "updateMapResults",
        mapResults: currentResults
      });
    }
  }, [currentResults, dispatch]);

  function changePage(page) {
    if (page !== resultPage) {
      setResultPage(page);
    }
  }

  function paginate(currentPageInput) {
    const currentPage = currentPageInput;
    const range = pages > maxPages ? maxPages : pages;
    const totalPages = pages;
    let start = 1;
    let paging = [];
    if (currentPage < (range / 2) + 1) {
      start = 1;
    } else if (currentPage >= (totalPages - (range / 2))) {
      start = Math.floor(totalPages - range + 1);
    } else {
      start = (currentPage - Math.floor(range / 2));
    }
    for (let i = start; i <= ((start + range) - 1); i++) {
      paging.push(i);
    }
    return paging;
  }

  return (
    <ResultListStyles>
      <ResultBreadcrumbs
        count={currentResults === undefined ? 0 : currentResults.length}
      />

      <Scrollbars
        autoHide
        autoHideDuration={200}
        autoHideTimeout={1000}
        style={{ width: "100%", position: "relative" }}
      >
        {currentResults === undefined && <Loader message="Loading Results" />}
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
                    className={`table__sort__button table__sort__button--inactive ${activeSort === "Email" &&
                      "active"}`}
                  >
                    Email
                  </button>
                </th>
                <th>
                  <button
                    className={`table__sort__button table__sort__button--inactive ${activeSort === "Phone" &&
                      "active"}`}
                  >
                    Phone
                  </button>
                </th>
                <th>
                  <button
                    className={`table__sort__button ${activeSort ===
                      "Distance" && "active"}`}
                    onClick={() => {
                      updateSortOrder("Distance");
                    }}
                  >
                    Distance
                    {activeSort === "Distance" && (
                      <FontAwesomeIcon
                        className="column__sort__icon"
                        icon={sortDirection === "asc" ? faCaretUp : faCaretDown}
                      />
                    )}
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
                      resultItemUser={user}
                    ></ResultItem>
                  );
                })}
            </tbody>
          </table>
        </div>
      </Scrollbars>
      <div className="result__count__wrapper">
        {currentResults !== undefined && currentResults.length > 0 && (
          <>
            <PaginatorStyles className="paginator" pages={pages >= maxPages ? maxPages : pages}>
              <button
                className="pager"
                onClick={() => changePage(resultPage > 1 ? resultPage - 1 : 1)}
              >
                <FontAwesomeIcon
                  className="pagination__icon"
                  icon={faCaretLeft}
                />
              </button>
              {paginate(resultPage).map((element, index) => {
                return (
                  <button
                    key={`pagination button ${index}`}
                    className={`${
                      resultPage === element ? "active pager" : "pager"}`}
                    onClick={() => changePage(element)}
                    style={{
                      fontWeight: `${resultPage === element ? "bold" : "normal"}`,
                      fontSize: "1.2rem"
                    }}
                  >
                    {element}
                  </button>
                );
              })}
              <button
                className="pager"
                onClick={() =>
                  changePage(
                    resultPage < pages ? resultPage + 1 : pages
                  )
                }
              >
                <FontAwesomeIcon
                  className="pagination__icon"
                  icon={faCaretRight}
                />
              </button>
            </PaginatorStyles>
            {currentResults !== undefined && (
              <span>{`Showing ${(resultPage - 1) * 25 + 1} through ${
                resultPage < pages
                  ? 25 * (resultPage)
                  : searchResults.length
                } of ${searchResults.length} results on page ${resultPage} of ${pages}.`}</span>
            )}
          </>
        )}
      </div>
    </ResultListStyles>
  );
}
