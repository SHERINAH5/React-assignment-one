import React  from 'react';
import './great.css';

function Great({name, age, address}) {
  console.log(name, 'name')
  return (
    <div className='great-card'>
      <h1>Hello {name}</h1>
      <h2>I am {age} old</h2>
    </div>
  )
}

export default Great;
