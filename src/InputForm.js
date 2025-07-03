
import React, { useState } from "react";
import  './InputForm.css';

function InputForm()  {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}  className="form">
      <h3 >Input Form</h3>
      <input className="input"  type="text" name="name" placeholder="Name" onChange={handleChange} /><br />
      <input  className="input" type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
      <input className="input" type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
      <button className="input" type="submit" style={{color: 'blue'}} >Submit</button>
    </form>
  );
}


export default InputForm;
