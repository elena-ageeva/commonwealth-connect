import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// FUNCTIONS
import { getDisplayName } from "../../util/util";

// STATE
import { useStateValue } from "../../state";
import FlyoutStyles from "./Flyout.styles";
import { withRouter } from "react-router-dom";

import { UserProfilePicture } from "../";

function Flyout({ location }) {
  const [{ selectedUser }, dispatch] = useStateValue();

  function renderAddress(address) {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{address.street}</span>
        <span>{`${address.city}, ${address.state}, ${address.zip}`}</span>
      </div>
    );
  }

  function renderSection(userObject, sectionKey) {
    let shownItemKeys;
    if (location.pathname === "/") {
      shownItemKeys = Object.keys(userObject[sectionKey]).filter(
        itemKeyRaw => {
          return (
            userObject[sectionKey][itemKeyRaw].show &&
            userObject[sectionKey][itemKeyRaw].inFlyout
          );
        }
      );
    } else {
      shownItemKeys = Object.keys(userObject[sectionKey]).filter(
        itemKeyRaw => {
          return (
            userObject[sectionKey][itemKeyRaw].inFlyout
          );
        }
      );
    }

    if (shownItemKeys.length > 0) {
      return shownItemKeys.map(itemKey => {
        return (
          <div
            className={`flyout__section__item flyout__content ${!userObject[sectionKey][itemKey].show && "hidden__flyout__item"}`}
            key={`flyout section item ${itemKey}`}
          >
            <button
              onClick={() => {
                if (location.pathname === "/profile") {
                  dispatch({
                    type: "changeActiveItem",
                    activeItem: itemKey
                  });
                }
              }}
              className="flyout__content flyout__section__link"
            >
              <strong className="flyout__content">{`${itemKey}: `}</strong>
              {userObject[sectionKey][itemKey].value && userObject[sectionKey][itemKey].value.toString().length > 0
                ? itemKey.indexOf("Primary Address") > -1
                  ? renderAddress(userObject[sectionKey][itemKey].value)
                  : userObject[sectionKey][itemKey].value.toString().split(",").join(", ")
                : "None"}
            </button>
          </div>
        );
      });
    } else {
      return (
        <div
          className="flyout__section__item flyout__content"
          key={`flyout section item ${sectionKey}`}
        >
          <span className="flyout__content">No Information Provided</span>
        </div>
      );
    }
  }

  function renderSections() {
    const userInfo = JSON.parse(JSON.stringify(selectedUser));
    const renderedSections = Object.keys(userInfo)
      .filter(key => {
        return typeof userInfo[key] === "object";
      })
      .map(sectionKey => {
        return (
          <div
            className="flyout__section flyout__content"
            key={`flyout section ${sectionKey}`}
          >
            <button
              onClick={() => {
                if (location.pathname === "/profile") {
                  dispatch({
                    type: "changeActiveSection",
                    activeSection: sectionKey
                  });
                }
              }}
              className="flyout__section__link flyout__section__title flyout__content"
            >
              {sectionKey}
            </button>
            <div className="flyout__section__list flyout__content">
              {renderSection(userInfo, sectionKey)}
            </div>
          </div>
        );
      });
    return renderedSections;
  }

  return (
    <FlyoutStyles className="flyout__content" location={location.pathname}>
      {selectedUser && (
        <>
          <div className="flyout__header flyout__content">
            {location.pathname === "/" && (
              <button
                className="flyout__close__button flyout__content"
                onClick={() => {
                  dispatch({
                    type: "updateSelectedUser",
                    selectedUser: undefined
                  });
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            )}
            <UserProfilePicture scale={1} />
            <div className="user__info flyout__content">
              <div className="user__name__wrapper flyout__content">
                <span className="user__name flyout__content">
                  {getDisplayName(selectedUser)}
                </span>
                <div className="user__info__controls flyout__content"></div>
              </div>
              <span className="user__practice flyout__content">
                {selectedUser["Contact Information"]["Practice Name"].value}
              </span>
            </div>
          </div>
          <Scrollbars
            className="flyout__content"
            style={{
              width: "100%",
              height: "100%",
              position: "relative"
            }}
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
          >
            {renderSections()}
          </Scrollbars>
        </>
      )}
    </FlyoutStyles>
  );
}

export default withRouter(Flyout);
