const apiCall = 'https://api.foursquare.com/v2/venues/search?client_id=O1W14F1AL2SS5JIKXXYMTOHERT0IV4AFKEVJGI3J2JNOJTVL&client_secret=O3PYRRN0HJOE0WWJ3Z2BL0UQBUJMLZ1NPVLSZQCNAI1WXXMC&v=20180323&limit=10&ll=53.54872,9.97855&query=restaurant'

export function venues() {
  return fetch(apiCall)
  .then(response => response.json().then(function(x){return x.response.venues}))
  .catch(e => alert("Something is wrong with your internet connection. Map cannot be displayed"))}
