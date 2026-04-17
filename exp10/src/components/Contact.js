// src/components/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div style={{padding: "20px"}}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br/><br/>
        <input name="email" placeholder="Email" onChange={handleChange} /><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;