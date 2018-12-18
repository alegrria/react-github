/*global google*/
/*
thank you
Elharony for thorough explanation why initMap doesn't work straight away https://www.youtube.com/watch?v=W5LhLZqj76s
https://github.com/tomchentw/react-google-maps/issues/434 for solving google not defined error
*/
import React, { Component } from 'react';
import './App.css';
import * as Helper from './Helper';

class App extends Component {

  state = {
    venues: []
  }

  componentDidMount(){
    this.loadMap();
    window.initMap = this.initMap;
    Helper.venues().then(response => this.setState({ venues: response}))
  }

  loadMap = () => {
    createScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCGxJxfJmNOm9iN23fX-nt4O0Sg762ByZU&v=3&callback=initMap');
  }

  initMap = () => {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 53.548729, lng: 9.978558},
      zoom: 14
    })
  }

  render() {
    console.log(this.state.venues)
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
