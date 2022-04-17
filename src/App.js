//import logo from './logo.svg';
import './App.css';
import {
  Link
} from "react-router-dom";


export default function App() {
  return (
    <div className='App'>
    <div className='dashBoard'>
      <h3><Link className="upLinks" to="/">Home</Link></h3>
      <h3><Link className="upLinks" to="/register">Register</Link></h3>
      <h3><Link className="upLinks" to="/login">Login</Link></h3>
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        */}
    </div>

    </div>
  );
}
