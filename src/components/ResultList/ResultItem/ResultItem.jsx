// DEPENDENCIES
import React from "react";

import { getDistance } from "../../../util/util";

// STATE
import { useStateValue } from "../../../state";

import { getDisplayName } from "../../../util/util";

// STYLES
import ResultItemStyles from "./ResultItem.styles";

import UserProfilePicture from "../../UserProfile/UserProfilePicture";

export default function ResultItem({ index, resultItemUser }) {
  const [{ view, selectedUser, user }, dispatch] = useStateValue();
  function handleUserSelect() {
    if (view === "search") {
      dispatch({
        type: "updateSelectedUser",
        selectedUser: resultItemUser
      });
    } else if (view === "map") {
      dispatch({
        type: "updateMapUser",
        mapUser: resultItemUser
      });
    }
  }
  return (
    <ResultItemStyles
      className="result__item__content"
      selected={selectedUser !== undefined && selectedUser.id === resultItemUser.id}
      onClick={handleUserSelect}
    // onMouseEnter={handleUserSelect}
    >
      <td className="result__item__content">
        <UserProfilePicture className="result__item__content" index={index} scale={0.8} />
      </td>
      <td className="result__item__content">
        <span className="result__name result__item__content">
          {`${getDisplayName(resultItemUser)}`}
        </span>
      </td>
      <td className="result__item__content">
        <span className="result__item__content">
          {resultItemUser["Contact Information"]["Practice Name"].value}
        </span>
      </td>
      <td className="result__item__content">
        <span className="clickable result__item__content">
          {resultItemUser["Contact Information"].Email.value}
        </span>
      </td>
      <td className="result__item__content">
        <div className="phone__cell result__item__content">
          <span
            className="result__item__content result__item__content"
            style={{ whiteSpace: "nowrap" }}
          >
            <strong className="result__item__content">Business: </strong>
            <span className="clickable result__item__content">
              {resultItemUser["Contact Information"]["Business Phone Number"].value}
            </span>
          </span>
          {resultItemUser["Contact Information"]["Mobile Phone Number"].show &&
            <span
              className="result__item__content"
              style={{ whiteSpace: "nowrap" }}
            >
              <strong className="result__item__content">Mobile: </strong>
              <span className="clickable result__item__content">
                {resultItemUser["Contact Information"]["Mobile Phone Number"].value}
              </span>
            </span>
          }
        </div>
      </td>
      <td className="result__item__content">
        <span style={{ zIndex: 11, position: "relative" }} className="result__item__content">
          {Math.ceil(getDistance(user, resultItemUser, "M"))} miles
        </span>
      </td>
    </ResultItemStyles>
  );
}
