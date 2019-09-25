// DEPENDENCIES
import React, { useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";

// BOOTSTRAP
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";

// STATE
import { useStateValue } from "../../state";

// STYLES
import HomeStyles from "./Home.styles";

// COMPONENTS
import { Filter, ResultList, Map, Flyout } from "../";

function Home() {
  const [{ selectedUser, view, user }, dispatch] = useStateValue();

  function clickHandler(ev) {
    if (
      selectedUser !== undefined &&
      !ev.target.classList.contains("flyout__content") &&
      !ev.target.classList.contains("result__item__content")
    ) {
      dispatch({
        type: "updateSelectedUser",
        selectedUser: undefined
      });
    }
  }
  useEffect(() => {
    window.addEventListener("click", clickHandler);
    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, [selectedUser]);
  return user.firstLogon ? (
    <Redirect to="/profile" />
  ) : (
    <HomeStyles fluid={true}>
      <Row style={{ height: "100%" }}>
        <Collapse in={view === "search"} dimension="width" timeout={0}>
          <Col
            sm={2}
            style={{
              height: "100%",
              padding: "0 0 0 15px"
            }}
          >
            <Filter></Filter>
          </Col>
        </Collapse>
        <Col
          sm={7}
          style={{
            height: "100%",
            padding: `${view === "search" ? "0" : "0px 0px 0px 00px"}`,
            borderRight: "1px solid #DFDFDF"
          }}
        >
          <ResultList></ResultList>
        </Col>
        <Col
          sm={view === "search" ? 3 : 5}
          style={{
            height: "100%",
            padding: "0"
          }}
        >
          {selectedUser && view === "search" && <Flyout user={selectedUser} />}
          <Map></Map>
        </Col>
      </Row>
    </HomeStyles>
  );
}

export default withRouter(Home);
