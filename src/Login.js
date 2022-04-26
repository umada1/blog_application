import App from "./App";
import './Form.css';
import './Middle.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Login() {

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  const stateUsername = (e) => {
    e.preventDefault();
    setCredentials((credentials ) => ({
      ...credentials,
      username: e.target.value
    }));
  }
  
  const statePassword = (e) => {
    e.preventDefault();
    setCredentials((credentials) => ({
      ...credentials,
      password: e.target.value
    }));
  }

  let authorise = useNavigate();

  const sendCredentials = (e) => {
    e.preventDefault();

    // on submit, if credentials fit, issue a token and transfer to the access page
    // function to evaluate credentials, issue token and redirect if evaluated
    // to redirect:
    authorise("/authorised");
    // /authorised
    // terminate when session is ended, or logout is clicked
    // make sure hashing is performed here

  }




    return (
        <div className="defaultForm">
            <App />
            <div className='middle'>
            <div className="fillableForm">
            <h2>Log in to continue</h2>
            <form onSubmit={sendCredentials}>
              <div className="credentials">
                <label for="email">
                  email address
                </label>
                <input onChange={stateUsername} required type="email" placeholder="example@emailprovider.com" name="email" value={credentials.username}>
                </input>
                <label for="password">
                  password
                </label>
                <input onChange={statePassword} required type="password" name="password" placeholder="*********" value={credentials.password}></input>
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