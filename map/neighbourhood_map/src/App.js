/*global google*/
/*thank you https://www.youtube.com/watch?v=W5LhLZqj76s*/
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount(){
    this.loadMap();
    window.initMap = this.initMap
  }

  loadMap = () => {
    createScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCGxJxfJmNOm9iN23fX-nt4O0Sg762ByZU&v=3&callback=initMap');
  }

  initMap = () => {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
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
