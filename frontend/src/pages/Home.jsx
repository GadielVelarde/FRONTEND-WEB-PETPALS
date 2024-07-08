import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to the FORUTEC App</h2>
      <p>Please use the menu to navigate through the application.</p>
      <button onClick={() => navigate('/login')}>Go to Login</button>
      <button onClick={() => navigate('/register')}>Go to Register</button>
    </div>
  );
};

export default Home;