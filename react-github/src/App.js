import React, { Component } from 'react';
import SearchField from './SearchField';
import UserList from './UserList';
import User from './User';
import * as GitHubAPI from './GitHubAPI';
import './App.css';

class App extends Component {
  state = {
    language: '',
    repos: [],
    users: [],
  }
  componentDidMount(){
      GitHubAPI.getRepos(this.state.language).then((repos) => {
        this.setState({
          repos
        })
      })
    }

  render() {
    return (
      <div className="App">
        <div className="search"><SearchField/></div>
        <div className="search"><UserList/></div>
      </div>
    );
  }
}

export default App;
