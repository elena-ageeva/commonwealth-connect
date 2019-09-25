// DEPENDENCIES
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

// STATE
import { useStateValue } from "../../state";

// BOOTSTRAP
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// STYLES
import ProfileStyles from "./Profile.styles";

// COMPONENTS
import { Flyout, UserProfile, FullLoader } from "..";
import UserProfileControls from "../UserProfile/UserProfileControls";

function Profile({ location }) {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    if (location.pathname === "/profile") {
      dispatch({
        type: "updateSelectedUser",
        selectedUser: { ...user }
      });
    }
    return () => {
      dispatch({
        type: "updateSelectedUser",
        selectedUser: undefined
      });
    };
  }, [location, user, dispatch]);

  return (
    <ProfileStyles fluid={true}>
      <FullLoader />
      <Row style={{ height: "100%" }}>
        <Col sm={1} style={{ padding: 0 }}></Col>
        <Col sm={3} style={{ padding: 0 }}>
          <Flyout></Flyout>
          <UserProfileControls />
        </Col>
        <Col sm={6}>
          <UserProfile></UserProfile>
        </Col>
        <Col sm={2}>
          <div style={{ marginTop: "20px" }}>
            <h2>Something wrong?</h2>
            <p style={{ fontSize: "1.2rem" }}>
              If you would like to make changes to your personal or business
              information, please contact licensing at either x9994 or
              licensing@commonwealth.com.
            </p>
          </div>
        </Col>
      </Row>
    </ProfileStyles>
  );
}

export default withRouter(Profile);
