// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {
  const [carsState, setCarsState] = useState({
    cars: {
      red: false,
      blue: false,
      yellow: false,
    }
  })

  const moveCar = (car, side) => {
    setCarsState({
      cars: {
        ...carsState,
        [car]: side,
      },
    });
  }

  const context = {
    ...carsState,
    moveCar,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
