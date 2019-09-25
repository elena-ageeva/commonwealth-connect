// DEPENDENCIES
import React from "react";

// STATE
import { useStateValue } from "../../../state";

import { getDisplayName } from "../../../util/util";

// STYLES
import ResultItemStyles from "./ResultItem.styles";

import UserProfilePicture from "../../UserProfile/UserProfilePicture";

export default function ResultItem({ index, user }) {
  const [{ view, selectedUser }, dispatch] = useStateValue();
  function handleUserSelect() {
    if (view === "search") {
      dispatch({
        type: "updateSelectedUser",
        selectedUser: user
      });
    }
  }
  return (
    <ResultItemStyles
      className="result__item__content"
      selected={selectedUser !== undefined && selectedUser.id === user.id}
      onClick={handleUserSelect}
    >
      <td className="result__item__content">
        <UserProfilePicture className="result__item__content" scale={0.8} />
      </td>
      <td className="result__item__content">
        <span className="result__name result__item__content">
          {getDisplayName(user)}
        </span>
      </td>
      <td className="result__item__content">
        <span className="result__item__content">
          {user["Contact Information"]["Practice Name"].value}
        </span>
      </td>
      <td className="result__item__content">
        <span className="clickable result__item__content">
          {user["Contact Information"].Email.value}
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
              {user["Personal Information"]["Mobile Phone Number"].value}
            </span>
          </span>
          <span
            className="result__item__content"
            style={{ whiteSpace: "nowrap" }}
          >
            <strong className="result__item__content">Mobile: </strong>
            <span className="clickable result__item__content">
              {user["Contact Information"]["Business Phone Number"].value}
            </span>
          </span>
        </div>
      </td>
      <td className="result__item__content">
        <span className="result__item__content">
          {user["Contact Information"]["Primary Address"].value.distance} miles
        </span>
      </td>
    </ResultItemStyles>
  );
}
