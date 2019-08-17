import React from 'react';
import PropTypes from 'prop-types';
import * as GitHubAPI from './GitHubAPI';

const User = (props) => {
  User.propTypes = {
    user: PropTypes.object.isRequired,
  };

  const github_user = GitHubAPI.getUser(props.user)

  return (
    <li key={props.user.id} >
      <div className="user">
        <div className="user-name">Name is {github_user.name}</div>
        <div className="user-username">Username is {github_user.login}</div>
        <div className="user-username">See the avatar: {props.user.avatar_url}</div>
        <div className="user-username">Followed by: {props.user.followers}</div>
      </div>
    </li>
  )
};

export default User
