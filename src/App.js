import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const resetUsers = () => {
    setUsers([]);
  };

  const openContactUs = () => {
    window.open('https://github.com/cvansh03', '_blank');
  };


  return (
    <div>
      <nav className="navbar">
        <button className="navbar-reset-button" onClick={resetUsers}>
          PUMA
        </button>
        <div className="navbar-buttons">
          <button className="navbar-button" onClick={openContactUs}>
            Contact Us
          </button>
          <button className="navbar-button">About</button>
        </div>
        <button className="get-users-button" onClick={getUsers}>
          Get Users
        </button>
      </nav>
      {loading ? (
        <div className="loader-container">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <div className="user-card-grid">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <img className="user-card-image" src={user.avatar} alt={user.first_name} />
              <h3 className="user-card-name">
                {user.first_name} {user.last_name}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
