import React, { Component } from 'react';
import SearchField from './SearchField';
import UserList from './UserList';
import * as GitHubAPI from './GitHubAPI';
import './App.css';

class App extends Component {
  state = {
    language: '',
    repos: [],
    users: [],
  }

  getUsers = () => {

  }

  render() {
    return (
      <div className="App">
        <div className="search"><SearchField /></div>
        <div className="search"><UserList users={this.state.users} language={this.state.language}/></div>
      </div>
    );
  }
}

export default App;
