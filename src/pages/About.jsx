import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        application utilizes the GitHub API to fetch user details.
      </p>
      <p className='text-lg text-gray-400'>
        Built by :&nbsp;
        <a
          className='text-white'
          target='_blank'
          href='https://twitter.com/abhis3kh'
        >
          Abhisekh Mukherjee
        </a>
      </p>
    </div>
  );
};

export default About;
