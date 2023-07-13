import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Contact.css';

export default function Contact() {
  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeContact = (e) => {
    setContact(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact">
      <div className="contact1">
        <div className="contact2">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <h1>ContactUs</h1>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleChangeUsername}
              />
              <input
                type="text"
                placeholder="Contact Number"
                value={contact}
                onChange={handleChangeContact}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleChangeEmail}
              />
              <textarea name='textarea'
               placeholder="Enter your comments"
                rows={6}>
              </textarea>
                <Link to='/home'>
              <button className="btn" type="submit">
                Submit
              </button>
                </Link>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}