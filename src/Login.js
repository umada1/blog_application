import App from "./App";
import './Form.css';
import React, { useState } from 'react';


export default function Login() {
    return (
      <div className="defaultForm">
          <App />
          <div className="fillableForm">
            <form>
              <div className="credentials">
                <label>
                  email address
                  <input required type="email" placeholder="example@emailprovider.com" name="email">
                  </input>
                </label>
                <label>
                  password
                  <input required type="password" name="password">
                  </input>
                </label>

              </div>
              <div className="confirmation">
                <button type="submit">Log in</button>
              </div>
            </form>
          </div>
      </div>
    );
  }