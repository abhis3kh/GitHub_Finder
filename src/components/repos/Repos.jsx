import React from 'react';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>
          Top Updated Respositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
          //   <h3> {repo.name}</h3>
        ))}
      </div>
    </div>
  );
};

export default Repos;
