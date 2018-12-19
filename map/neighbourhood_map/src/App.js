/*global google*/
/*
thank you
Elharony for thorough explanation why initMap doesn't work straight away https://www.youtube.com/watch?v=W5LhLZqj76s
https://github.com/tomchentw/react-google-maps/issues/434 for solving google not defined error
*/
import React, { Component } from 'react';
import './App.css';
import * as Helper from './Helper';
import Header from './Header'
import Footer from './Footer'

class App extends Component {

  state = {
    venues: [],
    cuisines: []
  }

  componentDidMount(){
    Helper.venues().then(response => {this.setState({ venues: response, cuisines: response.map(function(venue){if(venue.categories[0]){return venue.categories[0].name}else{return 'no info'}}).filter((v, i, a) => a.indexOf(v) === i)});
    this.loadMap();
    window.initMap = this.initMap;
    })
  }

  loadMap = () => {
    createScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCGxJxfJmNOm9iN23fX-nt4O0Sg762ByZU&v=3&callback=initMap');
  }

  initMap = () => {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 53.548729, lng: 9.978558},
      zoom: 14
    });
    let markers = [];
    let infowindow = new google.maps.InfoWindow();
    let bounds = new google.maps.LatLngBounds();
    if(this.state.venues){
      this.state.venues.forEach(function(venue) {
        let marker = new google.maps.Marker({
          position: { lat: venue.location.lat, lng: venue.location.lng },
          address: venue.location.address? venue.location.address : 'Hamburg',
          category: venue.categories[0]? venue.categories[0].name : ' no info about kitchen',
          map: map,
          venue: venue,
          id: venue.id,
          name: venue.name,
          animation: google.maps.Animation.DROP
        });
        markers.push(marker);
        bounds.extend(marker.position);
        marker.addListener('click', function(){
          populateInfoWindow(this, infowindow)
        })
      });
      function populateInfoWindow(marker, infowindow) {
        if (infowindow.marker !== marker) {
          infowindow.marker = marker;
          infowindow.setContent('<div><h3>'+ marker.name + '</h3>' + marker.address + '<h4>' + marker.category + '</h3></div>');
          infowindow.open(map, marker);
          infowindow.addListener('closeclick',function(){
            infowindow.setMarker = null;
          });
        }
      }
    }
  }

  render() {
    console.log(this.state.venues)
    console.log(this.state.cuisines)
    return (
      <div className="App">
        <Header/>
        <div id='map' aria-label="restaurant location map"></div>
        <Footer cuisines={this.state.cuisines.uniq}/>
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
