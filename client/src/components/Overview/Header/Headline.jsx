import React from 'react';
import SearchBar from './SearchBar.jsx';
import Logo from './Logo.jsx';

const Headline = (props) => {
  //log here
  return (
    <div className="relative h-11 justify-content pt-2">

      <div className='float-left'>
        <Logo />
      </div>
      <div className='float-right'>
         <SearchBar />
      </div>

    </div>
  )
};

export default Headline;