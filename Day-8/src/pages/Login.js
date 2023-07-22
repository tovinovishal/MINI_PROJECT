import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login authentication logic here

    // Example: Check if login credentials are valid
    if (loginEmail.trim() === '' || loginPassword.trim() === '') {
      alert('Please enter valid login credentials.');
      return;
    }

    // Navigate to the authenticated page on successful login
    navigate('/Home');
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            className="in"
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            className="in"
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />

          <button className="b">Login</button>
        </form>
       <h2>Don't have an account?<Link to='/signup'><a>Sign up</a></Link></h2>
      </div>
    </div>
  );
}

export default Login;