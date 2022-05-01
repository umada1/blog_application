
import App from "./App";
import './Form.css';
import React, { useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'

import { useNavigate } from "react-router-dom";

const callToAPI = 'http://localhost:8080/api/';

export default function Register() {

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [showAlert, setShowAlert] = useState(false);

  const [adminCheck, setAdminCheck] = useState(false);


  const stateCheck = (e) => {
    setAdminCheck(!adminCheck);
  }

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
    loginpage("/login"); // redirects successfully
  }

  const filledCredAdmin = {
    id: 0,
    username: credentials.username,
    password: credentials.password,
    rights: []
  };

  const filledCredUser = {
    id: 0,
    username: credentials.username,
    password: credentials.password,
    rights: null
  };
  const sendCredentials = (e) => {
    e.preventDefault();

    if(adminCheck){ // if true, register as admin
      axios.post(callToAPI+"register", filledCredAdmin)
      .then(res => {
          redirectToLoginPage(res);
        })
      .catch(error => console.log(error));
    }else{ // if false, register as user
      axios.post(callToAPI+"register", filledCredUser)
      .then(res => {
          redirectToLoginPage(res);
        })
      .catch(function (err) {
        console.log(err);
        setShowAlert(true);
      })
    }
    
    
  }

    return (
      <div className="defaultForm">
            <App />
            <div className='middle'>
            
            <div className="fillableForm">
            {showAlert?
            <Alert className="alert" id="regLog">
            <small>This email is already in use!</small>
            <button className="smallButton" onClick={() => setShowAlert(false)}>x</button>
            </Alert>
            : null}
            <h2>Register</h2>
            <form  onSubmit={sendCredentials}>
              <div className="credentials">
                <label htmlFor="email">
                  email address
                </label>
                <input onChange={stateUsername} required type="email" name="email" value={credentials.username}>
                </input>
                <label htmlFor="password">
                  password
                </label>
                <input minLength="9" onChange={statePassword} required type="password" name="password" placeholder="*********" value={credentials.password}></input>
                <label htmlFor="checkbox">
                  <p> Admin?
                  <input className="checkbox" type="checkbox" value={adminCheck} onChange={() => stateCheck()} name="checkbox"></input>
                  </p>
                </label>
              </div>
              <div className="confirmation">
                <button className="confirmationButton" type="submit">Sign me up</button>
              </div>
            </form>
            </div>
          </div>
        </div>
    );
  }