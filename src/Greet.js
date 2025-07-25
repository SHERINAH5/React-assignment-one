import React from 'react';
import './Greet.css';

function Greet({ name, age, school, address }) {
  console.log(name, 'name');
  return (
    <div className='great-card' >
      <h1>Hello! My name is {name}</h1>
      <p>I am {age} years old,</p>
      <p>I study from {school} and </p>
      <p>I come from {address}</p>
    </div>
  );
}

export default Greet;
