import React from 'react';
import { Link } from 'react-router-dom';
const UserItem = ({ name, image }) => {
  return (
    <div className='card shadow-lg compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={image} alt={`Profile picture of User : ${name}`} />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{name}</h2>
          <Link
            to={`/user/${name}`}
            className='text-base-context text-opacity-40'
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
