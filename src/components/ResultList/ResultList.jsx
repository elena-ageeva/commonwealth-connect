// COMPONENTS
import { Loader } from "../";
import ResultBreadcrumbs from "./ResultBreadcrumbs/ResultBreadcrumbs";
import ResultItem from "./ResultItem/ResultItem";
import { Scrollbars } from "react-custom-scrollbars";


// DEPENDENCIES
import React, { useEffect, useState } from "react";

// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

// STATE
import { useStateValue } from "../../state";

// STYLED COMPONENTS
import ResultListStyles, { PaginatorStyles } from "./ResultList.styles";

// UTILITIES
import { getDisplayName } from "../../util/util";

export default function ResultList() {
  const [{ directory }, dispatch] = useStateValue();
  const [currentResults, setCurrentResults] = useState(undefined);
  const [activeSort, setActiveSort] = useState(undefined);
  const [sortDirection, setSortDirection] = useState("desc");
  const [searchDuration, setSearchDuration] = useState(750);
  const [resultPage, setResultPage] = useState(0);
  const [pages, setPages] = useState(undefined);
  const [directoryLocal, setPaginatedResults] = useState(directory.slice(0 + resultPage * 25, (resultPage + 1) * 25))

  useEffect(() => {
    let fakeSave;
    if (directory) {
      if (activeSort) {
        const toSort = [...directory];
        toSort.sort((a, b) => {
          if (sortDirection === "asc") {
            if (activeSort === "name") {
              if (
                getDisplayName(a).toUpperCase() <
                getDisplayName(b).toUpperCase()
              ) {
                return -1;
              }
              if (
                getDisplayName(a).toUpperCase() > getDisplayName(b).toUpperCase()
              ) {
                return 1;
              } return 0;
            } else {
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
              } return 0;
            }
          }
          if (sortDirection === "desc") {
            if (activeSort === "name") {
              if (
                getDisplayName(a).toUpperCase() <
                getDisplayName(b).toUpperCase()
              ) {
                return 1;
              }
              if (
                getDisplayName(a).toUpperCase() > getDisplayName(b).toUpperCase()
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
                getDisplayName(a).toUpperCase() < getDisplayName(b).toUpperCase()
              ) {
                return 1;
              }
              return 0;
            }
          }
        });
        setCurrentResults(toSort.slice(0 + resultPage * 25, (resultPage + 1) * 25));
      } else {
        fakeSave = setTimeout(() => {
          setPages(Math.ceil(directory.length / 25))
          setCurrentResults([...directoryLocal]);
          setSearchDuration(0);
        }, searchDuration);
      }
    } return () => {
      window.clearTimeout(fakeSave)
    }
  }, [directoryLocal, activeSort, sortDirection, directory.length, directory, resultPage, searchDuration]);

  function updateSortOrder(sortBy) {
    if (sortBy === activeSort) {
      setSortDirection(sortDirection === "desc" ? "asc" : "desc");
    } else {
      setSortDirection("asc");
    }
    setActiveSort(sortBy);
  }

  useEffect(() => {
    setPaginatedResults(directory.slice(resultPage * 25, (resultPage + 1) * 25))
  }, [directory, resultPage]);

  useEffect(() => {
    if (directoryLocal !== undefined) {
      dispatch({
        type: "updateMapResults",
        mapResults: directoryLocal
      })
    }
  }, [directoryLocal, dispatch])

  function changePage(page) {
    if (page !== resultPage) {
      setResultPage(page);
    }
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
        {currentResults === undefined &&
          <Loader message="Loading Results" />
        }
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
        {currentResults !== undefined &&
          <>
            <PaginatorStyles className="paginator" pages={pages}>
              <button className="pager" onClick={() => changePage(resultPage > 0 ? resultPage - 1 : 0)}><FontAwesomeIcon
                className="pagination__icon"
                icon={faCaretLeft}
              /></button>
              {new Array(pages).fill(undefined).map((element, index) => {
                return <button className={`${resultPage === index ? 'active pager' : 'pager'}`} onClick={() => changePage(index)} style={{ fontWeight: `${resultPage === index ? 'bold' : 'normal'}`, fontSize: "1.2rem" }}>{index + 1}</button>
              })}
              <button className="pager" onClick={() => changePage(resultPage < pages - 1 ? resultPage + 1 : pages - 1)}><FontAwesomeIcon
                className="pagination__icon"
                icon={faCaretRight}
              /></button>

            </PaginatorStyles>
            {currentResults !== undefined && (
              <span>{`Showing ${resultPage * 25 + 1} through ${resultPage < pages - 1 ? 25 * (resultPage + 1) : directory.length} of ${directory.length} results on page ${resultPage + 1} of ${pages}.`}</span>
            )}
          </>
        }
      </div>
    </ResultListStyles>
  );
}
