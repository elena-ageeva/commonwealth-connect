// DEPENDENCIES
import React, { useState, useEffect } from "react";
import pin from "../../assets/pin.png";
import cfnpin from "../../assets/CFNlogopin.png";
// import highlightPin =

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faPhoneAlt,
  faEnvelope,
  faDirections
} from "@fortawesome/free-solid-svg-icons";

// STATE
import { useStateValue } from "../../state";

// STYLES
import MapStyles from "./Map.styles";
import { ReactBingmaps } from "react-bingmaps";

// COMPONENTS
import { Loader } from "../";

import { getDisplayName } from "../../util/util";

const offices = [
  {
    name: "Commonwealth Financial Network",
    "Practice Name": "Home Office",
    "Contact Information": {
      "Primary Address": {
        value: {
          street: "29 Sawyer Rd",
          city: "Waltham",
          state: "MA",
          zip: "02453-3483",
          geocode: [42.36127, -71.25996]
        }
      }
    }
  },
  {
    name: "Commonwealth Financial Network",
    "Practice Name": "San Diego Office",
    "Contact Information": {
      "Primary Address": {
        value: {
          street: "110 West A Street, Suite 1800",
          city: "San Diego",
          state: "CA",
          zip: "92101-3706",
          geocode: [32.71941, -117.16429]
        }
      }
    }
  }
];

const myStyle = {
  elements: {
    area: { fillColor: "#dfdfdf" },
    water: { fillColor: "#E9E9E9" },
    tollRoad: { fillColor: "#ffffff", strokeColor: "#ffffff" },
    arterialRoad: { fillColor: "#ffffff", strokeColor: "#ffffff" },
    road: { fillColor: "#ffffff", strokeColor: "#ffffff" },
    street: { fillColor: "#ffffff", strokeColor: "#ffffff" },
    transit: { fillColor: "#000000" }
  },
  settings: {
    landColor: "#dfdfdf"
  }
};

function renderInfoBox(practiceObject) {
  return (
    <div className="custom__infobox">
      <span className="custom__infobox__name">{practiceObject.name}</span>
      <span className="custom__infobox__practice"></span>
      <div className="custom__infobox__address">
        <span>{`${practiceObject.address.value.street}, `}</span>
        <span>{`${practiceObject.address.value.city}, ${practiceObject.address.value.state}, ${practiceObject.address.value.zip}`}</span>
      </div>
      <div className="custom__infobox__controls">
        <div className="infobox__control">
          <FontAwesomeIcon
            className="infobox__control__icon"
            icon={faPhoneAlt}
          />
          <span className="infobox__control__label">Call</span>
        </div>
        <div className="infobox__control">
          <FontAwesomeIcon
            className="infobox__control__icon"
            icon={faEnvelope}
          />
          <span className="infobox__control__label">Email</span>
        </div>
        <div className="infobox__control">
          <FontAwesomeIcon
            className="infobox__control__icon"
            icon={faGlobeAmericas}
          />
          <span className="infobox__control__label">Website</span>
        </div>
        <div className="infobox__control">
          <FontAwesomeIcon
            className="infobox__control__icon"
            icon={faDirections}
          />
          <span className="infobox__control__label">Directions</span>
        </div>
      </div>
    </div>
  );
}

const maploadState = {
  bingmapKey: "Au6Fw-kh_525BtrUwfsafEsEEL6h6Jg15eddh3Cmqcz-5XSjlVaJA--oY7RxIumc"
};

export default function Map() {
  const [{ directory, selectedUser }] = useStateValue();
  const [infoBoxesWithPushPins, updateInfoBoxesWithPushPins] = useState(
    undefined
  );
  const [pins, updatePins] = useState([]);

  function spreadUsers(practicesObject, userObject) {
    const practiceName =
      userObject["Contact Information"]["Practice Name"].value;
    if (practicesObject[practiceName]) {
      return [...practicesObject[practiceName].users, userObject];
    } else {
      return [userObject];
    }
  }

  useEffect(
    function() {
      if (directory !== undefined) {
        // assign an empty object to store unique practices
        const practices = {};

        // loop over every user
        directory.forEach(userElement => {
          const practiceName =
            userElement["Contact Information"]["Practice Name"].value;
          const practiceAddress =
            userElement["Contact Information"]["Primary Address"];
          practices[practiceName] = {
            name: practiceName,
            users: spreadUsers(practices, userElement),
            address: practiceAddress
          };
        });

        const results = Object.keys(practices).map(function(practiceName) {
          const geocode = practices[practiceName].address.value.geocode;
          const resultItem = {
            location: geocode,
            addHandler: "mouseover",
            infoboxOption: {
              title: practiceName,
              description: practiceName,
              htmlContent: renderInfoBox(practices[practiceName])
            },
            pushPinOption: {
              title: practiceName,
              description: practiceName,
              color: "#006699",
              icon: pin,
              height: "50px"
            }
          };
          return resultItem;
        });
        setTimeout(() => {
          updateInfoBoxesWithPushPins(results);
        }, 1500);
      }
    },
    [directory]
  );

  return (
    <MapStyles>
      {infoBoxesWithPushPins === undefined ? (
        <Loader message="Loading Map" />
      ) : (
        <ReactBingmaps
          bingmapKey={maploadState.bingmapKey}
          center={[42.36127, -71.25996]}
          infoboxesWithPushPins={infoBoxesWithPushPins}
          zoom={9}
          mapTypeId={"grayscale"}
          customMapStyle={myStyle}
          navigationBarMode={"minified"}
        ></ReactBingmaps>
      )}
    </MapStyles>
  );
}
