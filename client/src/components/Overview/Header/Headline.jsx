import React from 'react';
import SearchBar from './SearchBar.jsx';
import Logo from './Logo.jsx';

const Headline = (props) => {
  //log here
  return (
    <header className='position-absolute float-top flex flex-row bg-blue-700'>
      <div className='float-left'>
        <Logo />
      </div>
      <div className='float-right'>
         <SearchBar />
      </div>

    </header>
  )
};

export default Headline;