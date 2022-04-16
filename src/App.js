//import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <h2><Link to="/">Home</Link></h2>
      <h2><Link to="/register">Register</Link></h2>
      <h3><Link to="/login">Login</Link></h3>
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        */}
    </div>
  );
}
