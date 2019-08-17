import React, { Component } from 'react';
import SearchField from './SearchField';
import UserList from './UserList';
import User from './User';
import './App.css';

class App extends Component {
  state = {
    users: []
  }
  componentDidMount(){
      GitHubAPI.getUsers().then((users) => {
        this.setState({
          users
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
