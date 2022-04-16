
import App from "./App";
import './Form.css';
// purpose: a form - sends user creation request to API
// when submitted, either responds with a message, or a warning

export default function Register() {
    return (
      <div className="defaultForm">
          <App />
          <div className="fillableForm">
            <form>
              
            </form>
          </div>
      </div>
    );
  }