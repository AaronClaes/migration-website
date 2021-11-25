import React, { useState, Fragment } from "react";
import { StaticMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl-compare/dist/mapbox-gl-compare.css";
import "./styles.css";
import CountryMarker from "./components/CountryMarker";
import CountryPopup from "./components/CountryPopup";
import { countries } from "./data";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWFyb25jbGFlcyIsImEiOiJja3BqcmwyNnowMzNsMnFzMzVqYTRsNnp1In0.UeILTAYn1LCdlg09E2HByw";

export default function App() {
  const [currentCountry, setCurrentCountry] = useState(null);

  const handleCountryChange = (country) => {
    currentCountry?.name === country
      ? setCurrentCountry(null)
      : setCurrentCountry(countries[country]);
  };

  const [viewport] = useState({
    latitude: 23.5,
    longitude: 4.46,
    zoom: 1.9,
  });

  const [showRegular, toggleRegular] = useState(true);

  const style = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
  };

  return (
    <Fragment>
      <StaticMap
        {...viewport}
        width="100vw"
        height="100vh"
        style={style}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        minZoom={1}
      >
        <div>
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.Belgium}
          />
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.Mexico}
          />
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.Morocco}
          />
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.Spain}
          />
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.Spain2}
          />
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.Canada}
          />
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.China}
          />
        </div>
        <div>
          {currentCountry && (
            <div>
              <CountryPopup
                country={currentCountry}
                onChange={handleCountryChange}
              />
              <audio autoPlay src={currentCountry?.sound}></audio>
            </div>
          )}
        </div>
      </StaticMap>
      {/* <div className="overlay-text overlay-left">
        <div className="button" onClick={() => toggleRegular(!showRegular)}>
          Switch
        </div>
      </div> */}
    </Fragment>
  );
}
