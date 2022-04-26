
import App from "./App";
import './Middle.css';
import {
  Link
} from "react-router-dom";
// purpose: a form - sends user creation request to API
// when submitted, either responds with a message, or a warning
export default function Middle() {

    return (
      <div className="defaultForm">
          <App />
          <div className='middle'>
              <h2><Link className='deco' id='big' to="/">the blog.</Link></h2>
              <h5 className='deco' id='small'>log in to go further</h5>
          </div>
      </div>
    );
  }