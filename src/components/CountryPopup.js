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
        offsetTop={-24}
        closeButton={true}
        closeOnClick={false}
        onClose={() => onChange(country.name)}
        anchor="bottom"
      >
        <div className="popup-container">
          <div className="popup-header">
            <h3 className="popup-title">{country.name}</h3>
            <img className="popup-image" src={country.image} alt="" />
          </div>
          <p className="popup-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            aspernatur debitis. Sunt quia ipsa dignissimos in dolore quas
            eveniet! Maxime excepturi doloremque deserunt commodi impedit quae
            perferendis dolorum incidunt optio!
          </p>
        </div>
      </Popup>
    </div>
  );
};

export default CountryPopup;
