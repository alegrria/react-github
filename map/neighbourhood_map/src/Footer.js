import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {

  Footer.propTypes = {
    cuisines: PropTypes.array.isRequired,
    results: PropTypes.array.isRequired
  }

  return (

    <div id="footer">
      <h2>Listings</h2>
      <select id="cuisines-select" name="cuisines" aria-label="selection of cuisines" onChange="updateRestaurants()">
          {props.results.map(cuisine => <option key={cuisine} value={props.cuisines.find(x => x.id === cuisine).name}>{props.cuisines.find(x => x.id === cuisine).name}</option>)}
      </select>
    </div>
  )
}


export default Footer
