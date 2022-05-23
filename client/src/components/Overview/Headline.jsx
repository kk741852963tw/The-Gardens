import React from 'react';
import SearchBar from './SearchBar.jsx';

const Headline = (props) => {
  //log here
  return (
    <header>
      <div className="float-left">Logo</div>
        <SearchBar />
    </header>
  )
};

export default Headline;