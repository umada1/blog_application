import App from "./App";
import './Form.css';
import './Middle.css';
import React, { useState } from 'react';



export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const stateEmail = (e) => {
    e.preventDefault();
    setCredentials((credentials ) => ({
      ...credentials,
      email: e.target.value
    }));
  }
  
  const statePassword = (e) => {
    e.preventDefault();
    setCredentials((credentials) => ({
      ...credentials,
      password: e.target.value
    }));
  }


    return (
        <div className="defaultForm">
            <App />
            <div className='middle'>
            <div className="fillableForm">
            <h2>Log in to continue</h2>
            <form>
              <div className="credentials">
                <label for="email">
                  email address
                </label>
                <input onChange={stateEmail} required type="email" placeholder="example@emailprovider.com" name="email" value={credentials.email}>
                </input>
                <label for="password">
                  password
                </label>
                <input onChange={statePassword} required type="password" name="password" placeholder="*********" value={credentials.password}></input>
                <p>{credentials.password}</p>
              </div>
              <div className="confirmation">
                <button type="submit">Sign me in</button>
              </div>
            </form>
            </div>
          </div>
        </div>
    );
  }