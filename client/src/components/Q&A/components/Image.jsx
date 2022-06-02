//need modify;
import React, { useState, useEffect } from 'react';

export default function Image(props) {
  const handleCancel = function() {
    props.modal('');
  }
  return (
    <div className="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black flex flex-col justify-center">
      <span data-testid="image" className="absolute top-4 right-4 text-white text-4xl text-bold hover:text-gray-500 cursor-pointer" onClick={handleCancel}>&times;</span>
      <img src={props.url} className="m-auto block w-4/5 max-w-2xl"></img>
    </div>
  );
}