import React, { useState, useEffect } from 'react';
import Item from './Item';
import './App.css'; // Optional: for styling

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching data from a public API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>User List (Experiment 4)</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div style={{ display: 'grid', gap: '15px' }}>
          {users.map((user) => (
            <Item key={user.id} data={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;