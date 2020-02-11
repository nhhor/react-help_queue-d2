import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>

      <h3 className="red-text">{props.location} - {props.names}</h3>
      <p className="green-text"><em>{props.issue}</em></p>
      <hr/>
      <style jsx>{`
      .red-text {
        color: red;
      }
      .green-text {
        color: green;
      }
      `}</style>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};


export default Ticket;
