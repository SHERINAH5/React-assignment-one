import React from 'react';
import Greet from './Greet';
import Garage from './Garage';
import { MissedGoal } from './Goal/MissedGoal';
import InputForm from './InputForm';        
import TextareaForm from './TextareaForm';  
import SelectForm from './SelectForm';

function App() {
  const students = [
    { name: 'ARINDA', age: 27, school: 'WITI', address: 'Kampala' },
    { name: 'Ruth', age: 18, school: 'Namirembe', address: 'Entebbe' },
    { name: 'Lynnet', age: 20, school: 'Trinity', address: 'Mbale' }
  ];

  const myCars = ["Toyota", "Honda", "Ford"];

  return (
    <div>
      {/* Loop through students */}
      {students.map((student, index) => (
        <Greet
          key={index}
          name={student.name}
          age={student.age}
          school={student.school}
          address={student.address}
        />
      ))}

      
      <InputForm />
      <TextareaForm />
      <SelectForm/>

      <Garage cars={myCars} />
      <MissedGoal />

    </div>
  );
}

export default App;
