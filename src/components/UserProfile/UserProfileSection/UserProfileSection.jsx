// DEPENDENCIES
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../../../state";

// STYLES
import UserProfileSectionStyles from "./UserProfileSection.styles";

// COMPONENTS
import UserProfileItem from "./UserProfileItem/UserProfileItem";

export default function UserProfileSection({ title, items, type, id }) {
  const [{ activeSection }] = useStateValue();

  const [expanded, setExpanded] = useState(true);
  return (
    <UserProfileSectionStyles isActive={activeSection && activeSection === id} id={id} type={type} expanded={expanded}>
      <div className="user__profile__section__header">
        <button
          onClick={() => setExpanded(!expanded)}
          className="user__profile__section__title"
        >
          {title}<FontAwesomeIcon className="expand__icon" icon={faCaretDown} />
        </button>
        {(type === "default" || type === "default--component") && expanded && title !== "Contact Information" && (
          <span className="show__label">SHOW IN DIRECTORY?</span>
        )}
      </div>
      <div className="profile__items">
        {items.map((item, index) => {
          return (
            <UserProfileItem
              section={title}
              key={`profile item - ${index}`}
              type={type}
              item={item}
              canHide={item.canHide}
              toggleValueDisplay={item.toggleValueDisplay}
              updateUserValue={item.updateUserValue}
              updateUserList={item.updateUserList}
            ></UserProfileItem>
          );
        })}
      </div>
    </UserProfileSectionStyles>
  );
}
