// DEPENDENCIES
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";

// STYLES
import UserProfileItemStyles from "./UserProfileItem.styles";
import { UserProfilePicture } from "../../..";
import { TextInput } from "../../../Input";
import Checkboxalypse from "../../../Checkboxalypse/Checkboxalypse";

export default function ProfileItem({
  item,
  canHide,
  type,
  toggleValueDisplay,
  updateUserValue,
  section,
  updateUserList
}) {
  const [show, setShow] = useState(item.show);
  function toggleDisplay(section, label) {
    toggleValueDisplay(section, label);
  }
  function updateValue(value, section, item) {
    updateUserValue(value, section, item);
  }
  function updateValue(ev) {
    const value = ev.target.name;
    const checked = ev.target.checked;
    updateUserList(section, item.label, value, checked);
  }
  useEffect(() => {
    setShow(item.show);
  }, [item.show]);
  return (
    <UserProfileItemStyles show={show} type={type} itemHidden={item.hidden}>
      {type === "users" && (
        <div className="user__list__item">
          <UserProfilePicture scale={0.6} />
          <span>{item.name}</span>
          {item.hidden && (
            <div className="hidden__flag">
              <FontAwesomeIcon className="hidden__icon" icon={faBan} />
              <span>hidden from searches</span>
            </div>
          )}
        </div>
      )}
      {(type === "info" || type === "default--component") && item}
      {item.label && (
        <>
          <span className="profile__item__label">{`${item.label}:`}</span>
          <span className="profile__item__value">
            {typeof item.value !== "object" ? (
              item.canEdit ? (
                <TextInput
                  section={section}
                  item={item.label}
                  value={item.value}
                  onChange={updateValue}
                />
              ) : (
                item.value
              )
            ) : Array.isArray(item.value) ? (
              item.canEdit ? (
                <Checkboxalypse
                  onChange={updateValue}
                  masterList={item.label}
                  values={item.value}
                />
              ) : (
                item.value.join(", ")
              )
            ) : (
              Object.keys(item.value)
                .map(key => {
                  return item.value[key];
                })
                .join(", ")
            )}
          </span>
        </>
      )}
      {canHide && (
        <button
          onClick={() => toggleDisplay(item.section, item.label)}
          className="toggle"
        >
          <div className="toggle__indicator"></div>
        </button>
      )}
    </UserProfileItemStyles>
  );
}
