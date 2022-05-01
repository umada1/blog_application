//import logo from './logo.svg';
import './App.css';
import {
  Link
} from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function AuthApp() {


  const logoutUser = () => {
    localStorage.removeItem("token");
    // erase token from localstorage
  }

  return (
    <div className='App'>
    <div className='dashBoard'>
      <h3> Welcome, {}</h3>
      <h3><Link onClick={()=>logoutUser()} className="upLinks" to="/">Log out</Link></h3>
    </div>

    </div>
  );
}