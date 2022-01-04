import React from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-image"></div>
      <MediaQuery maxWidth={1039}>
        <div className="box box-hero">
          <h1 className="hero-title">
            Modern
            <br />
            Art Gallery
          </h1>
          <div className="blurb">
            <p>
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1040}>
        <div className="black-box">
          <div className="wrap">
            <h1 className="hero-title-desk">
              Modern
              <br />
              Art Gallery
            </h1>
          </div>
        </div>

        <div className="blurb-desk">
          <p>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
        </div>
      </MediaQuery>

      <NavLink
        to="/location"
        className="location-link"
        style={{ textDecoration: 'none' }}
      >
        <div className="btn">
          <div className="btn-location">
            <h4>Our Location</h4>
          </div>
          <div className="arrow right"></div>
        </div>
      </NavLink>
    </div>
  );
};

export default Hero;
