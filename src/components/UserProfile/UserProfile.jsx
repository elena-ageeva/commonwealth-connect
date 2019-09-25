// DEPENDENCIES
import React, { useRef, useEffect, useState, useCallback } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

// STATE
import { useStateValue } from "../../state";

// STYLES
import UserProfileStyles from "./UserProfile.styles";

// COMPONENTS
import UserProfileSection from "./UserProfileSection/UserProfileSection";
import { getDisplayName } from "../../util/util";

export default function Profile() {
  const [{ user, directory, activeSection }, dispatch] = useStateValue();
  const [scrollTop, setScrollTop] = useState(0);
  const scrollSection = useRef(null);
  function toggleValueDisplay(section, label) {
    const updatedUser = {
      ...user,
      [section]: {
        ...user[section],
        [label]: {
          ...user[section][label],
          show: !user[section][label].show
        }
      }
    };
    dispatch({
      type: "updateUser",
      updatedUser
    });
  }
  function updateUserValue(value, section, item) {
    const updatedUser = {
      ...user,
      [section]: {
        ...user[section],
        [item]: {
          ...user[section][item],
          value
        }
      }
    };
    dispatch({
      type: "updateUser",
      updatedUser
    });
  }
  function updateUserList(section, list, value, checked) {
    console.log(section, list, value, checked);
    const updatedUserList = [...user[section][list].value];
    if (checked) {
      updatedUserList.push(value);
      updatedUserList.sort((a, b) => {
        if (a.toLowerCase() > b.toLowerCase()) {
          return 1;
        } else if (a.toLowerCase() > b.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      });
      const updatedUser = {
        ...user,
        [section]: {
          ...user[section],
          [list]: {
            ...user[section][list],
            value: updatedUserList
          }
        }
      };
      dispatch({
        type: "updateUser",
        updatedUser
      });
    } else {
      const filteredList = updatedUserList.filter(
        listItem => listItem !== value
      );
      const updatedUser = {
        ...user,
        [section]: {
          ...user[section],
          [list]: {
            ...user[section][list],
            value: filteredList
          }
        }
      };
      dispatch({
        type: "updateUser",
        updatedUser
      });
    }
  }
  useEffect(() => {
    if (activeSection) {
      const section = document.getElementById(activeSection);
      const sectionTop = section.getBoundingClientRect().top;
      scrollSection.current.scrollTop(sectionTop + scrollTop - 175);
    }
  }, [activeSection]);
  return (
    <UserProfileStyles firstLogon={user.firstLogon}>
      <div className="profile__header">
        <Link to="/" className="profile__back">
          <FontAwesomeIcon className="map__toggle__icon" icon={faCaretLeft} />
          <span className="map__toggle__label">{"Back to results"}</span>
        </Link>
        <h1 className="profile__title">My Profile</h1>
      </div>
      <Scrollbars
        ref={scrollSection}
        onScrollFrame={values => {
          setScrollTop(values.scrollTop);
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative"
        }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        {Object.keys(user)
          .filter(key => {
            return typeof user[key] === "object";
          })
          .map(sectionKey => {
            return (
              <UserProfileSection
                id={sectionKey}
                key={`${user.id}-${sectionKey}`}
                type="default"
                title={sectionKey}
                items={Object.keys(user[sectionKey]).map(itemKey => {
                  return {
                    label: itemKey,
                    section: sectionKey,
                    value: user[sectionKey][itemKey].value,
                    show: user[sectionKey][itemKey].show,
                    canHide: user[sectionKey][itemKey].canHide,
                    canEdit: user[sectionKey][itemKey].canEdit,
                    toggleValueDisplay,
                    updateUserValue,
                    updateUserList
                  };
                })}
              ></UserProfileSection>
            );
          })}
        <UserProfileSection
          key={`${user.id}-user list`}
          type="users"
          title="People in my Practice"
          items={directory
            .filter(
              userElement =>
                userElement["Contact Information"]["Practice Name"].value ===
                user["Contact Information"]["Practice Name"].value
            )
            .sort((a, b) => {
              const aName = getDisplayName(a);
              const bName = getDisplayName(b);
              if (aName > bName) {
                return 1;
              } else if (aName < bName) {
                return -1;
              } else {
                return 0;
              }
            })
            .sort((a, b) => {
              if (a.hidden && !b.hidden) {
                return 1;
              } else if (!a.hidden && b.hidden) {
                return -1;
              } else {
                return 0;
              }
            })
            .map(filteredUser => {
              return {
                name: getDisplayName(filteredUser),
                hidden: filteredUser.hidden
              };
            })}
        />
      </Scrollbars>
    </UserProfileStyles>
  );
}
