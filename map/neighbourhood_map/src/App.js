/*global google*/
/*
thank you
Elharony for thorough explanation why initMap doesn't work straight away https://www.youtube.com/watch?v=W5LhLZqj76s
https://github.com/tomchentw/react-google-maps/issues/434 for solving google not defined error
*/
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount(){
    this.loadMap();
    window.initMap = this.initMap;
    this.markers = fetch('https://api.foursquare.com/v2/venues/explore?client_id=O1W14F1AL2SS5JIKXXYMTOHERT0IV4AFKEVJGI3J2JNOJTVL&client_secret=O3PYRRN0HJOE0WWJ3Z2BL0UQBUJMLZ1NPVLSZQCNAI1WXXMC&v=20180323&limit=1&ll=53.548729,9.978558&query=restaurant')
    .then(function(results) {
      console.log('it worked')
      console.log(results.json())
    })
    .catch(function() {
      console.log('naah, no work')
    });
  }

  loadMap = () => {
    createScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCGxJxfJmNOm9iN23fX-nt4O0Sg762ByZU&v=3&callback=initMap');
  }

  initMap = () => {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 53.548729, lng: 9.978558},
      zoom: 14
    });
    let locations = [
      {title: 'Hauptkirche St Michaelis', location: {lat: 53.548729, lng: 9.978558}},
      {title: 'Miniatur Wunderland Museum', location: {lat: 53.543846, lng: 9.988999}},
      {title: 'Panoptikum', location: {lat: 53.549433, lng: 9.966551}},
      {title: 'Rickmer Rickmers Museum Schiff', location: {lat: 53.546044, lng: 9.969365}},
      {title: 'Beatles Platz', location: {lat: 53.549967, lng: 9.957476}},
      {title: 'Panoptikum', location: {lat: 53.551182, lng: 9.973950}}
    ]


    // let infoWindow = new google.maps.InfoWindow();
    //
    // // Try HTML5 geolocation.
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     var pos = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //     infoWindow.setPosition(pos);
    //     infoWindow.setContent('Location found.');
    //     infoWindow.open(map);
    //     map.setCenter(pos);
    //   })
    // }
  }


  render() {
    return (
      <div className="App">
        <div id='map'>
        </div>

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
