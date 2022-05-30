import React from 'react';
import SearchBar from './SearchBar.jsx';
import Logo from './Logo.jsx';

const Headline = (props) => {
  //log here
  return (
    <header className='max-w-[1240px] mx-auto px-4 flex justify-between'>
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