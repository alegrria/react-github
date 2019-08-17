import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

const UserList = (props) => {
  UserList.propTypes = {
    users: PropTypes.array.isRequired,
    language: PropTypes.object.isRequired,
  }

  return(
    <div className="userlist">
    <h2 className="userlist">Users, who use {props.language} in their repositories</h2>
    <div className="users"> {props.users.map((user) =>
      <User user={user}/>
      )}
    </div>
  </div>
  )
}

export default UserList
