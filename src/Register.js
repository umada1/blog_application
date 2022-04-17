
import App from "./App";
import './Form.css';
import React, { useState } from 'react';
// purpose: a form - sends user creation request to API
// when submitted, either responds with a message, or a warning


export default function Register() {
    return (
      <div className="defaultForm">
            <App />
            <div className='middle'>
            <div className="fillableForm">
            <h2>Register</h2>
            <form>
              <div className="credentials">
                <label for="email">
                  email address
                </label>
                <input required type="email" placeholder="example@emailprovider.com" name="email">
                </input>
                <label for="password">
                  password
                </label>
                <input required type="password" name="password"  placeholder="*********"></input>

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