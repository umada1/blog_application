import App from "./App";
import './Form.css';
import './Middle.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'

const callToAPI = 'http://localhost:8080/api/';
export default function Login() {

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [showAlert, setShowAlert] = useState(false);

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

  const redirectToAuthorised = (e) => {
    authorise("/authorised"); // redirects successfully
  }

  const filledCred = {
    id: 0,
    username: credentials.username,
    password: credentials.password
  };

  const sendCredentials = (e) => {
    e.preventDefault();
    axios.post(callToAPI+"auth", filledCred)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem('token', token);
        redirectToAuthorised(localStorage.getItem('token'));
        })
        .catch(function (err) {
          console.log(err);
          setShowAlert(true);
      })
  }

    return (
        <div className="defaultForm">
          
            <App />
            <div className='middle'>
            <div className="fillableForm">
            {showAlert?
            <Alert className="alert" id="regLog">
            <Alert.Heading>Credentials are incorrect! try again <button className="smallButton" onClick={() => setShowAlert(false)}>x</button></Alert.Heading>
            </Alert>
          : null}
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