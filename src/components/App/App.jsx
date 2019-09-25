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

const emptyFilters = {
  Audience: [],
  Distance: [],
  "Practice Size": [],
  "OSJ Designation": [],
  Tenure: [],
  "Job Responsibilities": [],
  Production: [],
  "Affiliation Model": [],
  "Business Interests": [],
  "Business Niche": [],
  "Personal Interests": []
};

const App = () => {
  document.title = "Commonwealth Connect";

  const initialState = {
    activeSection: undefined,
    directory: demoData.directory,
    filters: {
      Audience: ["Advisors"],
      Distance: [25, "02453"],
      "Practice Size": [],
      "OSJ Designation": [],
      Tenure: [],
      "Job Responsibilities": [],
      Production: [],
      "Affiliation Model": [],
      "Business Interests": [],
      "Business Niche": [],
      "Personal Interests": []
    },
    loading: false,
    mapResults: undefined,
    modal: {
      show: demoData.user.firstLogon,
      title: "Welcome to Commonwealth Connect!",
      message: "Please take a moment to fill out your profile."
    },
    resultPage: 0,
    searchResults: [],
    selectedUser: undefined,
    user: demoData.user,
    view: "search"
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
      case "clearFilters":
        return {
          ...state,
          filters: JSON.parse(JSON.stringify(emptyFilters))
        };
      case "changeActiveSection":
        return {
          ...state,
          activeSection: action.activeSection
        };
      case "updateFilters": {
        return {
          ...state,
          filters: {
            ...state.filters,
            [action.section]: action.newFilters
          }
        };
      }
      case "confirmLogon":
        return {
          ...state,
          user: {
            ...state.user,
            firstLogon: false
          }
        };
      case "setSearchResults":
        return {
          ...state,
          searchResults: action.searchResults
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
      case "updateMapResults":
        return {
          ...state,
          mapResults: action.mapResults
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
