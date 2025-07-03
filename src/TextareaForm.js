
import React, { useState } from "react";

function TextareaForm() {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Textarea Value:", message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Textarea Form</h3>
      <textarea
        value={message}
        onChange={handleChange}
        placeholder="Write your message here"
      /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default TextareaForm;