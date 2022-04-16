//import logo from './logo.svg';
import Register from './Register';
import Login from './Login';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <div className="App">

      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      */}
      <Router>
        <div className="Dashboard">
          <h2><Link to="/">Home</Link></h2>
          <h2><Link to="/register">Register</Link></h2>
          <h3><Link to="/login">Login</Link></h3>
          <Switch>
            <Route exact path = "/">
              <App></App>
            </Route>
            <Route path = "/register">
              <Register></Register>
            </Route>
            <Route path = "/login">
              <Login></Login>
            </Route>
          </Switch>
        </div>
      </Router>




    </div>
  );
}
