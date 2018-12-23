/*global google*/
/*
thank you
Elharony for thorough explanation why initMap doesn't work straight away https://www.youtube.com/watch?v=W5LhLZqj76s
https://github.com/tomchentw/react-google-maps/issues/434 for solving google not defined error
linking marker to restaurant's name https://css-tricks.com/forums/topic/clickable-page-links-to-open-markers-on-google-map/
*/
import React, { Component } from 'react';
import './App.css';
import * as Helper from './Helper';
import Header from './Header'
import Footer from './Footer'

class App extends Component {

  state = {
    venues: [],
    cuisines: [],
    allVenues:[],
    markers: []
  }

  updateRestaurants = this.updateRestaurants.bind(this)

  componentDidMount(){
    let venues = Helper.venues()
    venues.then(response => {this.setState({
      venues: response.filter(venue => venue.categories.length !== 0),
      cuisines: response.filter(venue => venue.categories.length !== 0).map(function(venue)
        {return {id: venue.categories[0].id, name: venue.categories[0].name}}),
      allVenues: response.filter(venue => venue.categories.length !== 0)
    })
    this.loadMap()})
  }

  updateRestaurants(restaurants, value) {
    if(value !== 'all'){let newRestaurants = restaurants.filter(restaurant => restaurant.categories[0].id === value);
      this.setState({venues: newRestaurants}, () => {return this.initMap()})
    } else {
      this.setState({venues: restaurants},() => {return this.initMap()})}
  }

  loadMap = () => {
    createScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCGxJxfJmNOm9iN23fX-nt4O0Sg762ByZU&v=3&callback=initMap');
    window.initMap = this.initMap;
  }

  initMap = () => {
    // console.log(this.state.venues)
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 53.548729, lng: 9.978558},
      zoom: 13
    });
    let markers = [];
    let infowindow = new google.maps.InfoWindow();
    let bounds = new google.maps.LatLngBounds();
    if(this.state.venues){
      this.state.venues.forEach(function(venue) {
        let marker = new google.maps.Marker({
          position: { lat: venue.location.lat, lng: venue.location.lng },
          address: venue.location.address? venue.location.address : 'Hamburg',
          category: venue.categories[0]? venue.categories[0].name : 'no info about kitchen',
          map: map,
          venue: venue,
          id: venue.id,
          name: venue.name,
          animation: google.maps.Animation.DROP
        });
        markers.push(marker);
        bounds.extend(marker.position);
        marker.addListener('click', function(){
          Helper.populateInfoWindow(marker, infowindow, map)
        });
        marker.addListener('click', function(){
          for (var i = 0; i < markers.length; i++) {
            markers[i].setAnimation(null);
          }
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }});
      });
    }
    this.setState({markers: markers})
  }

  render() {
    // console.log(this.state.venues)
    // console.log(Helper.uniqueCategories(this.state.cuisines))
    // console.log(this.state.cuisines)
    // console.log(this.state.markers)
    return (
      <div className="App">
        <Header/>
        <div id='map' aria-label="restaurant location map"></div>
        <Footer restos={this.state.allVenues} results={Helper.uniqueCategories(this.state.cuisines)} updateRestaurants={this.updateRestaurants} selection={this.state.venues} markers={this.state.markers}/>
      </div>
    );
  }
}

 function createScript(url) {
    let index = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index)
  }

export default App;
