import React, { Component } from 'react';
import * as GitHubAPI from './GitHubAPI';

class Search extends Component {

  state = {
    language: '',
    repos: '',
  }


  setLanguage = (language) => {
    if (language) {
      GitHubAPI.getRepos(this.state.language).then((repos) => {
        this.setState({
          repos: repos,
        })
      }).catch(function(e) {
        console.log(e);
      })
    }
  }


  render() {
    return (
      <div className="search-users">
        <div className="search-users-bar">
          <div className="search-users-input-wrapper">
            <input type="text" placeholder="Search users by programming language they use in their repos" value={this.state.language} onChange={(event) => this.setState({language: event.target.value})}/>
            <button className="open-search" variant="primary" onClick={this.setLanguage(this.state.language)}>
              Search
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
