import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [signupBranchName, setSignupBranchName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');


    const handleSignup = (e) => {
        e.preventDefault();
        // Perform signup authentication logic here
    
        // Example: Check if signup data is valid
        if (signupBranchName.trim() === '') {
          alert('Please enter a branch name.');
          return;
        }
    
        if (signupEmail.trim() === '' || signupPassword.trim() === '') {
          alert('Please enter valid signup credentials.');
          return;
        }
    
        // Navigate to the authenticated page on successful signup
        navigate('/Home');
      };

      return(
        <div className='si'>
        <div className='ss'>
        <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          className="in"
          type="number"
          placeholder="Branch ID"
          value={signupBranchName}
          onChange={(e) => setSignupBranchName(e.target.value)}
          required
        />
        <input
          className="in"
          type="email"
          placeholder="Email"
          value={signupEmail}
          onChange={(e) => setSignupEmail(e.target.value)}
          required
        />
        <input
          className="in"
          type="password"
          placeholder="Password"
          value={signupPassword}
          onChange={(e) => setSignupPassword(e.target.value)}
          required
        />

        <button className="b">Sign Up</button>
      </form>
      </div>
      </div>
      );
  
}
export default Signup;
