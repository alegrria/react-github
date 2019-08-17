import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const UserList = (props) => {
  UserList.propTypes = {
    repos: PropTypes.array.isRequired,
    language: PropTypes.string.isRequired,
  }

  return(
    <div className="search-users-results">
      {props.language &&
        <h2 className="userlist">Users, who use {props.language} in their repositories</h2>
      }
      <div className="users"> {props.repos.map((repo) =>
        <li key={repo.id} >
          <User user={repo.owner.login}/>
        </li>
        )}
      </div>
    </div>
  )
}

export default UserList
