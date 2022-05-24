import React from 'react';
import SearchBar from './SearchBar.jsx';
import Logo from './Logo.jsx';

const Headline = (props) => {
  //log here
  return (
    <header className='float-top flex flex-row'>
      <div className='float-left basis-3/4'>
        <Logo />
      </div>
      <div className='float-right basis-1/4'>
         <SearchBar />
      </div>

    </header>
  )
};

export default Headline;