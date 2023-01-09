import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-8xl font-bold mb-8'>Opps...</h1>
          <p className='text-5xl mb-8 '>
            404 - What you are looking for doesn't exist.
          </p>
          <Link to='/' className='btn btn-primary btn-lg'>
            <FaHome className='mr-2' />
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
