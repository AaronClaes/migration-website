import React from "react";
import { Popup } from "react-map-gl";

const CountryPopup = ({ country, onChange }) => {
  return (
    <div>
      <Popup
        className="popup"
        latitude={country?.lat}
        longitude={country?.long}
        offsetLeft={17}
        offsetTop={0}
        closeButton={true}
        closeOnClick={false}
        onClose={() => onChange(country.name)}
        anchor="bottom"
      >
        <div className="popup-container">
          <div className="popup-header">
            <h3 className="popup-title">{country?.place}</h3>
            <img className="popup-image" src={country?.image} alt="" />
          </div>
          <h3 className="popup-subtitle">{country?.title}</h3>
          <p className="popup-description">{country?.description}</p>
        </div>
      </Popup>
    </div>
  );
};

export default CountryPopup;
