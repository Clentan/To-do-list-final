// src/components/Registration.js
import React, { useState } from 'react';
import PageNav from '../components/PageNav';
import Styles from './Login.module.css';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (localStorage.getItem(username)) {
      setMessage('Username already exists. Please choose a different username.');
    } else {
      localStorage.setItem(username, JSON.stringify({ username, password }));
      setMessage('Registration successful.');
    }
  };

  return (
    <div className={Styles.man}>
      <PageNav />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className={Styles.whiteText}>REGISTRATION PAGE</legend>
          <label htmlFor="username" className={Styles.whiteText}>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <label htmlFor="password" className={Styles.whiteText}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">REGISTER</button>
        </fieldset>
      </form>
      {message && <p className={Styles.whiteText}>{message}</p>}
    </div>
  );
}
