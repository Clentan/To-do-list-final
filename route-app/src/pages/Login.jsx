import React, { useState } from 'react';
import PageNav from '../components/PageNav';
import Styles from './Login.module.css';

export default function Login() {
  const [credential, setCredential] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setCredential(event.target.value);
  };

  const getGreetingMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good morning!';
    } else if (hour < 18) {
      return 'Good afternoon!';
    } else {
      return 'Good evening!';
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('credential', credential);
    const greetingMessage = getGreetingMessage();
    setLoggedInUser(credential);
    setMessage(`${greetingMessage} You have successfully logged in.`);
    alert(`${greetingMessage} You have successfully logged in.`);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('credential');
  };

  return (
    <div className={Styles.man}>
      <PageNav />
      {loggedInUser ? (
        <div>
          <p className={Styles.whiteText}>
            {getGreetingMessage()} {loggedInUser} <span role="img" aria-label="user icon">👤</span>
          </p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className={Styles.whiteText}>LOGIN PAGE</legend>
            <label htmlFor="credential" className={Styles.whiteText}>Credential:</label>
            <input
              type="text"
              id="credential"
              name="credential"
              value={credential}
              onChange={handleInputChange}
              required
            />
            <button type="submit">LOGIN</button>
          </fieldset>
        </form>
      )}
      {message && !loggedInUser && <p className={Styles.whiteText}>{message}</p>}
    </div>
  );
}
