import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import * as Helper from './Helper';

class Footer extends Component {

  state= {
    cuisineId: ''
  }

  static propTypes = {
    restos: PropTypes.array.isRequired,
    results: PropTypes.array.isRequired,
    updateRestaurants: PropTypes.func.isRequired
  };

  handleChange = (event) => {
    this.props.updateRestaurants(this.props.restos, event.target.value)
  }

  render (){
      // console.log(this.props.results)
      // console.log(this.props.restos)
      return (
      <div id="footer">
        <h2>Listings</h2>
        <select id="cuisines-select" name="cuisines" aria-label="selection of cuisines" onChange={this.handleChange}>
            <option key='all' value='all'>All Restaurants</option>
            {this.props.results.map(cuisine => <option key={cuisine.id} value={cuisine.id}>{cuisine.name}</option>)}
        </select>
      </div>
  )}
}


export default Footer
