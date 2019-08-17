import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
      getRepositories: PropTypes.func.isRequired
    };

  handleChange = (event) => {
    this.setState({language: event.target.value});
  }

  handleSubmit = (event) => {
    this.props.getRepositories(this.state.language)
    event.preventDefault();
  }

  render() {
    return (
      <div className="search-users">
        <div className="search-users-bar">
          <div className="search-users-input-wrapper">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Search users by programming language they use in their repos" value={this.state.value} onChange={this.handleChange}/>
              <input type="submit" className="open-search" value="Search"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
