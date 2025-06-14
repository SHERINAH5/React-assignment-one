import React from 'react';
import Greet from './Greet'; 

function App() {
  const students = [
    { name: 'ARINDA', age: 27, school: 'WITI', address: 'Kampala' },
    { name: 'Ruth', age: 18, school: 'Namirembe', address: 'Entebbe' },
    { name: 'Lynnet', age: 20, school: 'Trinity', address: 'Mbale' }
  ];

  return (
    <div>
      {students.map((student, index) => (
        <Greet
          key={index}
          name={student.name}
          age={student.age}
          school={student.school}
          address={student.address}
        />
      ))}
    </div>
  );
}

export default App;
