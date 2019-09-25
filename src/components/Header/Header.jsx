// DEPENDENCIES
import React from "react";

import { getDisplayName } from "../../util/util";

// ROUTING
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import UserProfilePicture from "../UserProfile/UserProfilePicture";

// STATE
import { useStateValue } from "../../state";

// STYLES
import HeaderStyles from "./Header.styles";

function Header({ location }) {
  const [{ user }] = useStateValue();
  return (
    <HeaderStyles>
      <Link to="/" className="header__title">
        Commonwealth Connect
      </Link>
      <span className="greeting">{`Welcome ${getDisplayName(user)}`}</span>
      <nav>
        <Link
          className={location.pathname === "/help" ? "active" : "inactive"}
          to="/help"
        >
          Help
        </Link>
        <Link
          className={`${
            location.pathname === "/profile" ? "active" : "inactive"
          } profile__wrapper`}
          to="/profile"
        >
          My Profile
          <UserProfilePicture />
        </Link>
      </nav>
    </HeaderStyles>
  );
}

export default withRouter(Header);
