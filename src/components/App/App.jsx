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
import { Header, Home, Profile, Modal } from "../";

// UTIL
import generateDemoData from "../../util/demoData";

const demoData = generateDemoData();

const emptyFilters = {
  searchTerm: undefined,
  Audience: undefined,
  Distance: undefined,
  "Practice Size": undefined,
  "OSJ Designation": undefined,
  Tenure: undefined,
  "Job Responsibilities": undefined,
  Production: undefined,
  "Affiliation Model": undefined,
  "Business Interests": undefined,
  "Business Niche": undefined,
  "Personal Interests": undefined
};

const App = () => {
  document.title = "Commonwealth Connect";

  const initialState = {
    activeItem: undefined,
    activeSection: undefined,
    directory: demoData.directory,
    filters: {
      searchTerm: undefined,
      Audience: ["Advisors"],
      Distance: { miles: 25, location: demoData.user["Contact Information"]["Primary Address"].value.zip },
      "Practice Size": undefined,
      "OSJ Designation": undefined,
      Tenure: undefined,
      "Job Responsibilities": undefined,
      Production: undefined,
      "Affiliation Model": undefined,
      "Business Interests": undefined,
      "Business Niche": undefined,
      "Personal Interests": undefined
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
      case "updateMapUser": {
        return {
          ...state,
          mapUser: action.mapUser
        }
      }
      case "changeActiveItem":
        return {
          ...state,
          activeItem: action.activeItem
        }
      case "setSearchTerm":
        return {
          ...state,
          filters: { ...state.filters, searchTerm: action.searchTerm }
        };
      case "clearSearchTerm":
        return {
          ...state,
          filters: { ...state.filters, searchTerm: undefined }
        };
      case "clearDistance":
        return {
          ...state,
          filters: {
            ...state.filters,
            Distance: undefined
            // Distance: [5, state.user["Contact Information"]["Primary Address"].value.zip]
          }
        };
      case "clearFilters":
        return {
          ...state,
          filters: JSON.parse(JSON.stringify(emptyFilters))
        };
      case "updateDistance":
        return {
          ...state,
          filters: {
            ...state.filters,
            Distance: action.newDistance
          }
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
