import React, { Component, useState, useEffect } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const incrementCount = () => setCounter(counter + 1);


  useEffect(() => {
    document.title = `you clicked ${counter} times`
  });

  return (
    <div>
      <p>You clicked {counter} times</p>
      <button onClick={incrementCount}>Click me</button>
    </div>
  )
}