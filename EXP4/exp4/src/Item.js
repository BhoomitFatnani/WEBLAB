import React, { useState } from 'react';

function Item({ data }) {
  // Each item has its own state to track if it is "liked"
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '15px', 
      borderRadius: '8px',
      backgroundColor: isLiked ? '#e6ffe6' : '#f9f9f9'
    }}>
      <h3>{data.name}</h3>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Company:</strong> {data.company.name}</p>
      
      <button 
        onClick={toggleLike} 
        style={{
          marginTop: '10px',
          padding: '8px 12px',
          backgroundColor: isLiked ? '#4CAF50' : '#008CBA',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {isLiked ? 'Liked ❤️' : 'Like'}
      </button>
    </div>
  );
}

export default Item;