// DEPENDENCIES
import React, { useState, useEffect } from "react";
import pin from "../../assets/pin.png";
import homePin from "../../assets/homePin.png";
import hoverPin from "../../assets/hoverPin.png";

// import cfnpin from "../../assets/CFNlogopin.png";
import { useTransition } from "react-spring";

// STATE
import { useStateValue } from "../../state";

// STYLES
import MapStyles from "./Map.styles";
import { ReactBingmaps } from "react-bingmaps";

// COMPONENTS
import { Loader } from "../";

import { getDisplayName } from "../../util/util";

// const offices = [
//   {
//     name: "Commonwealth Financial Network",
//     "Practice Name": "Home Office",
//     "Contact Information": {
//       "Primary Address": {
//         value: {
//           street: "29 Sawyer Rd",
//           city: "Waltham",
//           state: "MA",
//           zip: "02453-3483",
//           geocode: [42.36127, -71.25996]
//         }
//       }
//     }
//   },
//   {
//     name: "Commonwealth Financial Network",
//     "Practice Name": "San Diego Office",
//     "Contact Information": {
//       "Primary Address": {
//         value: {
//           street: "110 West A Street, Suite 1800",
//           city: "San Diego",
//           state: "CA",
//           zip: "92101-3706",
//           geocode: [32.71941, -117.16429]
//         }
//       }
//     }
//   }
// ];

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
      <ul className="office__user__list">
        {practiceObject.users.map(userObject => {
          return (
            <li
              key={`office user ${userObject.id}`}
              className="user__list__item"
            >
              {getDisplayName(userObject)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const maploadState = {
  bingmapKey: "Au6Fw-kh_525BtrUwfsafEsEEL6h6Jg15eddh3Cmqcz-5XSjlVaJA--oY7RxIumc"
};

export default function Map() {
  const [{ mapResults, user, mapUser, selectedUser, filters }] = useStateValue();
  const [infoBoxesWithPushPins, updateInfoBoxesWithPushPins] = useState(
    undefined
  );

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
    function () {
      let fakeSave;
      if (mapResults !== undefined) {
        const practices = {};
        mapResults.forEach(userElement => {
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

        const results = Object.keys(practices).map(function (practiceName) {
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
              icon: selectedUser && geocode === selectedUser["Contact Information"]["Primary Address"].value.geocode ? hoverPin : pin,
              height: "50px"
            }
          };
          return resultItem;
        });
        results.push({
          location: user["Contact Information"]["Primary Address"].value.geocode,
          addHandler: "mouseover",
          infoboxOption: {
            title: "My Practice",
            description: "My Practice",
            // htmlContent: renderInfoBox(practices[practiceName])
          },
          pushPinOption: {
            title: "My Practice",
            description: "My Practice",
            color: "#006699",
            icon: homePin,
            height: "50px"
          }
        })
        if (selectedUser) {
          results.push({
            location: selectedUser["Contact Information"]["Primary Address"].value.geocode,
            addHandler: "mouseover",
            infoboxOption: {
              title: "My Practice",
              description: "My Practice"
            },
            pushPinOption: {
              icon: hoverPin,
            }
          })
        }
        fakeSave = setTimeout(() => {
          updateInfoBoxesWithPushPins(results);
        }, 750);
      }
      return () => {
        window.clearTimeout(fakeSave);
      };
    },
    [mapResults, user, selectedUser]
  );

  const transitions = useTransition(infoBoxesWithPushPins === undefined, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  const [zoomLevel, setZoomLevel] = useState(9);

  function getZoomLevel(miles) {
    let zoom = 9;
    if (miles <= 10) {
      zoom = 12;
    }
    if (miles > 10 && miles <= 25) {
      zoom = 9;
    }
    if (miles > 25 && miles <= 50) {
      zoom = 8;
    }
    if (miles > 50 && miles <= 150) {
      zoom = 6;
    }
    if (miles > 150 && miles <= 250) {
      zoom = 6
    }
    if (miles > 250) {
      zoom = 3
    }

    return zoom;
  }

  useEffect(() => {
    if (filters.Distance) {
      const newZoomLevel = getZoomLevel(filters.Distance.miles)
      setZoomLevel(newZoomLevel);
    }
  }, [filters])

  return (
    <MapStyles>
      {transitions.map(
        ({ item, key, props }) =>
          item && <Loader key={key} message="Loading Map" />
      )}
      {infoBoxesWithPushPins !== undefined && (
        <ReactBingmaps
          bingmapKey={maploadState.bingmapKey}
          center={mapUser ? mapUser["Contact Information"]["Primary Address"].value.geocode : user["Contact Information"]["Primary Address"].value.geocode}
          infoboxesWithPushPins={infoBoxesWithPushPins}
          zoom={zoomLevel}
          mapTypeId={"grayscale"}
          customMapStyle={myStyle}
          navigationBarMode={"minified"}
        ></ReactBingmaps>
      )}
    </MapStyles>
  );
}
