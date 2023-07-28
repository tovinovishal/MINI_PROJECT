import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage,setErrorMessage]=useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    // if (name.trim() === '') {
    //   alert('Please enter a branch name.');
    //   return;
    // }
    // if (email.trim() === '' || password.trim() === '') {
    //   alert('Please enter valid signup credentials.');
    //   return;
    // }
    if (!name) {
      setErrorMessage('Please enter your name.');
      return;
    }

    // Email validation: Check if the email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters long.');
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:8081/api/v1/auth/register", {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        navigate('/');
        setName('');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error: ', error);
    }
    
  };

  return (
    <div className='wh'>
    <div className='c1'>
   
    <div className='form-container'>

    <form className="sf" onSubmit={handleSignup}>
 <h2 className='sp'>Sign Up</h2>
 <div className='in'>
 {errorMessage && <p className="error-message">{errorMessage}</p>}

<input
   className="inp"
   type="text"
   placeholder="Branch Name"
   value={name}
   onChange={(e) => setName(e.target.value)}
   required
 />
 <input
   className="inp"
   type="email"
   placeholder="Email"
   value={email}
   onChange={(e) => setEmail(e.target.value)}
   required
 />
 <input
   className="inp"
   type="password"
   placeholder="Password"
   value={password}
   onChange={(e) => setPassword(e.target.value)}
   required
 />
</div>
<div className='b'>
 <button>Sign Up</button>
 </div>
</form>
</div>
</div>
</div>
  );
}

export default Signup;