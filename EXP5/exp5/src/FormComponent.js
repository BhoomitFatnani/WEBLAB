import React, { useState } from 'react';

function FormComponent() {
  // State to manage form inputs
  const [formData, setFormData] = useState({ name: '', email: '' });
  // State to manage validation errors
  const [errors, setErrors] = useState({});
  // State to store and display submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear the error message for the specific field as the user types
    setErrors({ ...errors, [name]: '' });
  };

  // Validate the form before submission
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    const validationErrors = validate();
    
    // If there are errors, display them. Otherwise, process the data.
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedData(null);
    } else {
      setSubmittedData(formData);
      // Optional: Clear the form after successful submission
      setFormData({ name: '', email: '' }); 
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Name Input */}
        <div style={{ marginBottom: '15px' }}>
          <label><strong>Name:</strong></label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '95%', padding: '8px', marginTop: '5px' }}
            placeholder="Enter your name"
          />
          {errors.name && <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.name}</div>}
        </div>
        
        {/* Email Input */}
        <div style={{ marginBottom: '15px' }}>
          <label><strong>Email:</strong></label><br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '95%', padding: '8px', marginTop: '5px' }}
            placeholder="Enter your email"
          />
          {errors.email && <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.email}</div>}
        </div>

        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>
          Submit Data
        </button>
      </form>

      {/* Dynamically Display Results */}
      {submittedData && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px', border: '1px solid #c3e6cb' }}>
          <h3 style={{ marginTop: 0 }}>Processing Complete!</h3>
          <p><strong>Processed Name:</strong> {submittedData.name}</p>
          <p><strong>Processed Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default FormComponent;