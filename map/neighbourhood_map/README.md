
## Neighbourhood Map
This is the final project of Udacity Frond-End Developer Course.
You can have an overview of eating places in the centre of Hamburg, Germany or select a preferred cuisine.
Clicking on a restaurant's name causes the marker on the map bounce and display info in the infowindow.
Clicking on a marker causes the marker on the map bounce and display info in the infowindow.
To stop marker animation close the infowindow.

## How to use
Please clone this directory. Then install all project dependencies with
`npm install`
 and start the development server with
`npm start`, which opens [http://localhost:3000](http://localhost:3000) to view it in the browser.
Production Mode: create a production build with `npm run build`, which can then be run by pointing a web server at the build directory (for example, `serve -s build`) and opening it in a browser.
* Note that the offline functionality of the app is only available in Production Mode. This caches the app boilerplate  using the service worker provided with Create React App. The API data and map data are only shown when there is a network connection, to avoid violating any terms of service.

## Built With
* React
* Javascript
* Google Maps API
* Foursquare API
* Create React App

## Acknowledgements
I would like to thank and mention:
* Elharony for thorough explanation why initMap doesn't work straight away https://www.youtube.com/watch?v=W5LhLZqj76s
* https://github.com/tomchentw/react-google-maps/issues/434 for solving google not defined error
* linking marker to restaurant's name https://css-tricks.com/forums/topic/clickable-page-links-to-open-markers-on-google-map/
* registering SW https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
* Google and Udacity for the exciting journey through front-end jungle :)
