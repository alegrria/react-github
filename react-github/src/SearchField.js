import React, { Component } from 'react';
import UserList from './UserList'

class Search extends Component {

  state = {
    language: '',
  }

  setLanguage = (language) => {
  if (language) {
    this.setState({
      language: language,
    }).catch(function(e) {
      console.log(e);
    })
  } else {
    this.setState({
      language: '',
    })
  }
}

  render() {
    return (
      <div className="search-users">
        <div className="search-users-bar">
          <button className="close-search" onClick={() => this.props.history.push('/')}>Close</button>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search users by programming language they use in their repos" value={this.state.language} onChange={(event) => this.setLanguage(event.target.value)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
