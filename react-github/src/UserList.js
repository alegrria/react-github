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
      {props.repos &&
        <div className="users"> {props.repos.map((repo) =>
          <User key={repo.id} user={repo.owner.login}/>
          )}
        </div>
      }
    </div>
  )
}

export default UserList
