import React from 'react';
// eslint-disable-next-line import/no-cycle
import About from '../containers/About';
import Services from '../containers/Services';
import Reviews from '../containers/Reviews';
import Social from '../containers/Social';

const MainBlock = () => {
  return (
    <div>
      <About />
      <Services />
      <Reviews />
      <Social />
    </div>
  );
};

export default MainBlock;
