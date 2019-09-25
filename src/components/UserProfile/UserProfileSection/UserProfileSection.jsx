// DEPENDENCIES
import React, { useState } from "react";

// STYLES
import UserProfileSectionStyles from "./UserProfileSection.styles";

// COMPONENTS
import UserProfileItem from "./UserProfileItem/UserProfileItem";

export default function UserProfileSection({ title, items, type, id }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <UserProfileSectionStyles id={id} type={type} expanded={expanded}>
      <div className="user__profile__section__header">
        <button
          onClick={() => setExpanded(!expanded)}
          className="user__profile__section__title"
        >
          {title}
        </button>
        {(type === "default" || type === "default--component") && (
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
