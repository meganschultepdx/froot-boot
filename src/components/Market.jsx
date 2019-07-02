import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';

function Market(props){
  return (
    <div>
      <style jsx>{`
          div {
            background: rgb(240, 170, 170, 0.2);
            color: #eb0507;
          }
        `}</style>

      <hr/>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3>{props.day}</h3>
        </div>
        <div className="panel-body">
          <h3>Location:  {props.location}</h3>
          <h3>Hours:  {props.hours}</h3>
          <p>Booth:  {props.booth}</p>
        </div>
      </div>

      <hr/>
    </div>
  );
}

Market.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Market;
