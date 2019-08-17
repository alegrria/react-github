import React, { Component } from 'react';

Class User = (props) => {
  User.propTypes = {
    name: PropTypes.object.isRequired,
    username: PropTypes.object.isRequired,
    avatar_url: PropTypes.object.isRequired,
    followers_count: PropTypes.object.isRequired,
  };

  return
    <li key={props.username} >
      <div className="user">
        <div className="user-name">Name is {props.name}</div>
        <div className="user-username">Username is {props.username}</div>
        <div className="user-username">See the avatar: {props.avatar_url}</div>
        <div className="user-username">Floowed by: {props.followers_count}</div>
      </div>
    </li>
};

export default User
