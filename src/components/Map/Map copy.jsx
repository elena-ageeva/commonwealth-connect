// DEPENDENCIES
import React, { useEffect, useState } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { ReactBingmaps } from "react-bingmaps";

// STATE
import { useStateValue } from "../../state";

// STYLES
import MapStyles from "./Map.styles";

const Mapbox = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibXByYXR0IiwiYSI6ImNqemp6N3U5djBmZHozYm12enJrNGVmczcifQ.yfLn0TlfzzYGBJxRtvtJAQ"
});

export default function Map() {
  const [{ view }] = useStateValue();
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [view]);
  return (
    <MapStyles>
      <Mapbox
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100%",
          width: "100%"
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Mapbox>
      {/* <ReactBingmaps bingmapKey="AlpDpw5UDlAS0ta7sxAWrH6r68v6Lfu-jeoDi1wcKzU6wiUxOxHv2kiCih-mFWcc"></ReactBingmaps> */}
    </MapStyles>
  );
}
