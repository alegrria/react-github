import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as GitHubAPI from './GitHubAPI';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      github_user: ''
    }
  }
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  componentWillMount = () => {
    GitHubAPI.getUser(this.props.user).then((user) => {
      this.setState({
        github_user: user,
      })
    })
  }
  render() {
    return (
      <li key={this.props.user.id} >
        <div className="user">
          <div className="user-name">Name is {this.state.github_user.name}</div>
          <div className="user-username">Username is {this.state.github_user.login}</div>
          <div className="user-username">See the avatar: {this.state.github_user.avatar_url}</div>
          <div className="user-username">Followed by: {this.state.github_user.followers}</div>
        </div>
      </li>
    )
  }
};

export default User
