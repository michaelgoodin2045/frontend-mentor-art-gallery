import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const Location = () => {
  return (
    <div className="location">
      <div className="map-box">
        <NavLink
          to="/"
          className="location-link"
          style={{ textDecoration: 'none' }}
        >
          <div className="btn">
            <div className="arrow left"></div>
            <div className="btn-location">
              <h4>Back To Home</h4>
            </div>
          </div>
        </NavLink>
        <div className="map-image"></div>
        <div className="map-pointer"></div>
      </div>
      <div className="address-box dark">
        <h2 className="address-title">Our Location</h2>
        <h3 className="street-address">99 King Street</h3>
        <div className="city-address">
          <p>Newport</p>
          <p>RI 02840</p>
          <p>United States of America</p>
        </div>
        <p className="blurb">
          Our newly opened gallery is located near the Edward King House on 99
          King Street, the Modern Art Gallery is free to all visitors and open
          seven days a week from 8am to 9pm.
        </p>
      </div>
      <div className="copper">
        <Footer />
      </div>
    </div>
  );
};

export default Location;
