import App from "./App";
import './Form.css';

export default function Login() {
    return (
      <div className="defaultForm">
          <App />
          <div className="fillableForm">
            <form>
              <div className="credentials">
                <label>
                  email address
                </label>
                <label>
                  password
                </label>

              </div>
              <div className="confirmation">

              </div>
            </form>
          </div>
      </div>
    );
  }