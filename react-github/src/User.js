import React, { Component } from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  User.propTypes = {
    user: PropTypes.object.isRequired,
  };

  return (
    <li key={props.user.id} >
      <div className="user">
        <div className="user-name">Name is {props.user.name}</div>
        <div className="user-username">Username is {props.user.login}</div>
        <div className="user-username">See the avatar: {props.user.avatar_url}</div>
        <div className="user-username">Followed by: {props.user.followers_count}</div>
      </div>
    </li>
  )
};

export default User
