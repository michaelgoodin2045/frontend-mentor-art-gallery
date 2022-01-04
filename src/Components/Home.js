import React from 'react';
import Hero from './Hero';
import Day from './Day';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Day />
      <div className="dark">
        <Footer />
      </div>
    </>
  );
};

export default Home;
