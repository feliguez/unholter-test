import React from 'react';
import { PropTypes } from 'prop-types';

import './Div.scss';

const Div = props => {
  const { backgroundColor, number } = props;

  return (
    <div
      className="div-box"
      style={{
        background: `linear-gradient(333deg, rgba(0,0,0,.8) 0%, ${backgroundColor} 100%)`
      }}
    >
      <div className="div-info">#{number}</div>
    </div>
  );
};

Div.propTypes = {
  backgroundColor: PropTypes.string,
  number: PropTypes.number
};

export default Div;
