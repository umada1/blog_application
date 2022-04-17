import App from "./App";
import './Form.css';
import './Middle.css';
import React, { useState } from 'react';


export default function Login() {
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
                <input required type="email" placeholder="example@emailprovider.com" name="email">
                </input>
                <label for="password">
                  password
                </label>
                <input required type="password" name="password" placeholder="*********"></input>

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