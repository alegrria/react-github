import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {

  static propTypes = {
    restos: PropTypes.array.isRequired,
    results: PropTypes.array.isRequired,
    updateRestaurants: PropTypes.func.isRequired,
    selection: PropTypes.array.isRequired,
    markers: PropTypes.array.isRequired
  };

  handleChange = (event) => {
    this.props.updateRestaurants(this.props.restos, event.target.value)
  }

  handleClick = (event) => {
    let m = this.props.markers.find(marker => marker.id === event.target.id);
    new window.google.maps.event.trigger( m, 'click' );
  }

  render (){
      return (
      <aside id="footer">
        <h2>Listings</h2>
        <p>Please select cuisine to show appropriate restaurants</p>
        <select id="cuisines-select" name="cuisines" aria-label="selection of cuisines" onChange={this.handleChange}>
            <option key='empty' value='nothing'>Nothing selected</option>
            <option key='all' value='all'>All Restaurants</option>
            {this.props.results.map(cuisine => <option key={cuisine.id} value={cuisine.id}>{cuisine.name}</option>)}
        </select>
        <br/>
        <div id='restaurants'>
          {this.props.selection && this.props.selection.map(venue => <button data-message={`Information on ${venue.name}`} key={venue.id} id={venue.id} onClick={this.handleClick}>{venue.name}</button>)}
        </div>
      </aside>
  )}
}


export default Footer
