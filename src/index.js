import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './Register';
import Login from './Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Middle from './Middle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path = "/" element={<Middle />}></Route>
        <Route path = "/register" element={<Register />}></Route>
        <Route path = "/login" element={<Login />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
