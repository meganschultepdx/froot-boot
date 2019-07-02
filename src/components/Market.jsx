import React from 'react';
import PropTypes from 'prop-types';

function Market(props){
  return (
    <div>
        <style global jsx>{`
          div {
            background-color: grey;
          }
        `}</style>
      <h1>Here is where you can find us!</h1>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Market.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Market;
