import React, { useState } from "react";
import { Marker } from "react-map-gl";

const CountryMarker = ({ country, onChange }) => {
  const [showPopup, togglePopup] = React.useState(false);

  const handlePopupToggle = () => {
    togglePopup(!showPopup);
    onChange(country.name);
  };

  const [marker] = useState({
    latitude: country.lat,
    longitude: country.long,
  });
  return (
    <div>
      <Marker
        {...marker}
        offsetTop={-17}
        className="marker"
        captureClick={true}
      >
        <div
          style={{
            backgroundImage: `url(${country.image})`,
          }}
          className="innerMarker"
          onClick={() => handlePopupToggle()}
        />
      </Marker>
    </div>
  );
};

export default CountryMarker;
