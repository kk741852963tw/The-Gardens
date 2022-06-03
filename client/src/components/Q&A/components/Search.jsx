import React, { useState, useEffect } from 'react';

export default function Search(props) {
  const handleChange = function(event) {
    props.text(event.target.value);
  }

  return (
    <div className="flex m-auto w-full border-2 border-gray-400 border-solid rounded relative mb-1">
      <input id="inputSearch" data-testid="search" className="w-full h-8 m-2 focus:outline-none" typt='text' placeholder='Have a question? Search for answers…' onChange={handleChange}></input>
      <span className="flex flex-col justify-center mr-2">
        <svg className="fill-white text-zinc-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30">
          <path
            d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
          </path>
        </svg>
      </span>
    </div>
  );
}