import React from 'react';
import { PropTypes } from 'prop-types';
import Div from '../../components/Div/Div';
import './DivWrapper.scss';

const DivWrapper = () => {
  const divs = [
    { backgroundColor: 'blue' },
    { backgroundColor: 'green' },
    { backgroundColor: 'turquoise' }
  ];

  return (
    <div className="div-wrapper">
      {divs.map((div, i) => {
        const number = i + 1;
        return (
          <Div key={i} backgroundColor={div.backgroundColor} number={number} />
        );
      })}
    </div>
  );
};

DivWrapper.propTypes = {
  backgroundColor: PropTypes.string
};

export default DivWrapper;
