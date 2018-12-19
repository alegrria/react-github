import React from 'react';

const Footer = () => {

  return (
    <div id="footer">
      <h2>Listings</h2>
      <select id="cuisines-select" name="cuisines" aria-label="selection of cuisines" onChange="updateRestaurants()">
          <option value="all">All Cuisines</option>
          <option value="all">All Cuisines</option>
      </select>
    </div>
  )
}


export default Footer
