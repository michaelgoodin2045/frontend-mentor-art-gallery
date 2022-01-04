import React from 'react';
import MediaQuery from 'react-responsive';

const Day = () => {
  return (
    <div className="day">
      <div className="day-image one"></div>
      <div className="box light box-one">
        <MediaQuery maxWidth={1109}>
          <h2 className="day-title">
            Your Day
            <br />
            at the Gallery
          </h2>
        </MediaQuery>
        <MediaQuery minWidth={1110}>
          <h2 className="day-title">
            Your Day at
            <br />
            the Gallery
          </h2>
        </MediaQuery>

        <div className="blurb">
          <p>
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
      </div>

      <div className="day-image two"></div>
      <div className="day-image three"></div>
      <div className="box dark box-two">
        <h2 className="day-subtitle">Come & Be Inspired</h2>
        <div className="blurb">
          <p>
            We're excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Day;
