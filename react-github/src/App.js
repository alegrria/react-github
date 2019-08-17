import React, { Component } from 'react';
import SearchField from './SearchField';
import UserList from './UserList';
import * as GitHubAPI from './GitHubAPI';
import './App.css';

class App extends Component {
  state = {
    language: '',
    repos: [],
  }

  getRepositories = (language) => {
    console.log(language)
    GitHubAPI.getRepos(language).then((repos) => {
      console.log("eee"+ repos)
      this.setState({
        repos: repos,
        language: language,
      })
    })
  }
  getRepositories = this.getRepositories.bind(this)

  prepareUsers = () => {

  }

  render() {
    return (
      <div className="App">
        <div className="search"><SearchField getRepositories={this.getRepositories}/></div>
        <div className="userlist"><UserList repos={this.state.repos} language={this.state.language}/></div>
      </div>
    );
  }
}

export default App;
