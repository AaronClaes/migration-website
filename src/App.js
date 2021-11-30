import React, { useState, Fragment, useEffect } from "react";
import { StaticMap } from "react-map-gl";
import ReactMapGL from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl-compare/dist/mapbox-gl-compare.css";
import "./styles.css";
import CountryMarker from "./components/CountryMarker";
import CountryPopup from "./components/CountryPopup";
import { countries } from "./data";
import background from "./images/map.PNG";

import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";

// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker"; // Load worker code separately with worker-loader

mapboxgl.workerClass = MapboxWorker; // Wire up loaded worker to be used instead of the default

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWFyb25jbGFlcyIsImEiOiJja3BqcmwyNnowMzNsMnFzMzVqYTRsNnp1In0.UeILTAYn1LCdlg09E2HByw";

export default function App() {
  const [currentCountry, setCurrentCountry] = useState(null);

  const handleCountryChange = (country) => {
    currentCountry?.name === country
      ? setCurrentCountry(null)
      : setCurrentCountry(countries[country]);
  };

  const handleStart = () => {
    let scene = document.querySelector(".startScreen");
    scene.style.display = "none";
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

  useEffect(() => {
    let magic = document.querySelector(".magic");
    let scene = document.querySelector(".startScreen");
    let magicWHalf = magic.offsetWidth / 2;
    scene.addEventListener("mousemove", function (e) {
      let x = e.pageX - this.offsetLeft;
      let y = e.pageY - this.offsetTop;
      magic.style.left = `${x - magicWHalf}px`;
      magic.style.top = `${y - magicWHalf}px`;
      console.log(magic.style.left);
    });
    return () => {
      scene.removeEventListener("mousemove", function (e) {
        let x = e.pageX - this.offsetLeft;
        let y = e.pageY - this.offsetTop;
        console.log(x, y);
        magic.style.left = `${x - magicWHalf}px`;
        magic.style.top = `${y - magicWHalf}px`;
        console.log(magic.style.left);
      });
    };
  }, []);

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
        className="map"
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
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.Poland}
          />
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.Scotland}
          />
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.Jordan}
          />
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.Afghanistan}
          />
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.Libya}
          />
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.Cameroon}
          />
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.Colombia}
          />
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.Syria}
          />
          <CountryMarker
            onChange={handleCountryChange}
            country={countries.France}
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
      <div className="startScreen">
        <div
          className="magic"
          style={{
            background: `url(${background}) 50% 50% no-repeat fixed`,
          }}
        ></div>
        <div className="box">
          <h1 className="startScreen-title">Migration in our world</h1>
          <h2>Experience it through music, protests and sounds</h2>
          <div className="button" onClick={handleStart}>
            <h3>Start</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
