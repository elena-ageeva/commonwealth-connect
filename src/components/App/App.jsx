// DEPENDENCIES
import React from "react";
import { Button } from "react-bootstrap";

// ROUTING
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// APPLICATION STATE
import { StateProvider } from "../../state";

// STYLES
import { ThemeProvider } from "styled-components";
import AppStyles, { theme } from "./App.styles";

// COMPONENTS
import { Header, Home, Profile, Modal, StyledComponentDemo } from "../";

// UTIL
import generateDemoData from "../../util/demoData";

const demoData = generateDemoData();

const App = () => {
  document.title = "Commonwealth Connect";

  const initialState = {
    directory: demoData.directory,
    filters: [],
    modal: {
      show: demoData.user.firstLogon,
      title: "Welcome to Commonwealth Connect!",
      message: "Please take a moment to fill out your profile."
    },
    searchResults: [],
    selectedUser: undefined,
    user: demoData.user,
    view: "search",
    loading: false,
    activeSection: undefined
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "closeModal":
        return {
          ...state,
          modal: {
            ...state.modal,
            show: false
          }
        };
      case "changeActiveSection":
        return {
          ...state,
          activeSection: action.activeSection
        };
      case "confirmLogon":
        return {
          ...state,
          user: {
            ...state.user,
            firstLogon: false
          }
        };
      case "updateUser":
        return {
          ...state,
          user: action.updatedUser,
          selectedUser: action.updatedUser
        };
      case "toggleView":
        return {
          ...state,
          view: action.view
        };
      case "setLoading":
        return {
          ...state,
          loading: action.loading
        };
      case "updateSelectedUser":
        return {
          ...state,
          selectedUser: action.selectedUser
        };
      default:
        return state;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <AppStyles>
            <Modal />
            <Header />
            <Redirect exact from="/index.html" to="/" />
            <Route path="/" exact component={Home}></Route>
            <Route path="/profile" exact component={Profile}></Route>
          </AppStyles>
        </Router>
      </StateProvider>
    </ThemeProvider>
  );
};

export default App;