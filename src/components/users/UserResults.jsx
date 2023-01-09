import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';
const UserResults = () => {
  // pulling the data from context
  const { loading, users, fetchUsers } = useContext(GithubContext);
  // UseEffect to load all user when the pages loads so the dependency array will be null
  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} name={user.login} image={user.avatar_url} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
