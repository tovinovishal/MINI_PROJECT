import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupBranchName, setSignupBranchName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic here
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Signup logic here
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
            <Link to="/Home"><button>Login</button></Link>
          
    
        </form>
        <h3 >(or)</h3>

        <form className="signup-form" onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Branch Name"
            value={signupBranchName}
            onChange={(e) => setSignupBranchName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
          />
          <Link to="/Home"><button>Sign Up</button></Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
