
import App from "./App";
import './Form.css';
import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from "react-router-dom";

const callToAPI = 'http://localhost:8080/api/';

export default function Register() {

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

  let loginpage = useNavigate();

  const redirectToLoginPage = (e) => {
    console.log(e);
    loginpage("/login");
  }

  const filledCred = {
    id: 0,
    username: credentials.username,
    password: credentials.password
  };

  const sendCredentials = (e) => {
    e.preventDefault();
    axios.post(callToAPI+"register", filledCred)
      .then(res => {
          redirectToLoginPage(res);
        })
      .catch(error => console.log(error));
    // on submit, if credentials fit, issue a token and transfer to the access page
    // function to evaluate credentials, issue token and redirect if evaluated
    // to redirect:
    // /authorised
    // terminate when session is ended, or logout is clicked
    // make sure hashing is performed here
  }

    return (
      <div className="defaultForm">
            <App />
            <div className='middle'>
            <div className="fillableForm">
            <h2>Register</h2>
            <form  onSubmit={sendCredentials}>
              <div className="credentials">
                <label for="email">
                  email address
                </label>
                <input onChange={stateUsername} required type="email" name="email" value={credentials.username}>
                </input>
                <label for="password">
                  password
                </label>
                <input onChange={statePassword} required type="password" name="password" placeholder="*********" value={credentials.password}></input>

              </div>
              <div className="confirmation">
                <button type="submit">Sign me up</button>
              </div>
            </form>
            </div>
          </div>
        </div>
    );
  }