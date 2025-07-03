import React from "react";

function Garage(props) {
  const cars = props.cars;

  return (
    <div>
      <h1 style={{color:'blue'}}>Garage</h1>
      {cars && cars.length > 0 ? (
        <>
          <h2>You have {cars.length} cars in your garage:</h2>
          <ul>
            {cars.map((car, index) => (
              <li key={index}>{car}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Your garage is empty.</p>
      )}
    </div>
  );
}

export default Garage;
