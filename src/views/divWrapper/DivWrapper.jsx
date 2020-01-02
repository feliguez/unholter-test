import React from 'react';
import Div from '../../components/Div/Div';
import './DivWrapper.scss';

const DivWrapper = () => {
  const divs = [
    { backgroundColor: '#6d6d6d' },
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

export default DivWrapper;
