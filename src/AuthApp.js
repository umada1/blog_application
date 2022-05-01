//import logo from './logo.svg';
import './App.css';
import {
  Link
} from "react-router-dom";
import jwt_decode from 'jwt-decode';


export default function AuthApp() {


  const logoutUser = () => {
    localStorage.removeItem("token");
    // erase token from localstorage
  }

  return (
    <div className='App'>
    <div className='dashBoard'>
      <h3 className="greet"> Welcome, {jwt_decode(localStorage.getItem("token")).sub}</h3>
      <h3><Link onClick={()=>logoutUser()} className="upLinks" to="/">Log out</Link></h3>
    </div>

    </div>
  );
}