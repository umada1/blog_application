import AuthApp from "./AuthApp";
import './App.css';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { useState, useEffect } from "react";
import Alert from 'react-bootstrap/Alert'

const callToAPI = 'http://localhost:8080/api/';

export default function Authorised() {

  const [entry, setEntry] = useState("");
  const [resources, setResources] = useState([]);
  const [users, setUsers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showUsers,setShowUsers] = useState(false);
  const [showExpired, setShowExpired] = useState(false);

  var token = localStorage.getItem('token');
  var timeNow = new Date();
  var current = timeNow.getFullYear()+"/"+timeNow.getMonth()+"/"+timeNow.getDate()+ " at " + timeNow.getHours()+":"+timeNow.getMinutes();

  /*
  window.onbeforeunload = () => {
    // when browser is closed, remove auth token
    localStorage.removeItem('token');
  }*/

  useEffect(() => {
    if(jwt_decode(localStorage.getItem("token")).exp < (Date.now()/ 1000)){
      setShowExpired(true);
    }
    getAllResources();
  }, []);

  const getAllUsers = () => {
    axios.get(callToAPI+'users', {
      headers:{
        Accept: 'application/json',
       'Content-Type': 'application/json',
        Authorization: token ,
        "Access-Control-Allow-Origin": "http://localhost:8080"
    }})
      .then(function (res) {
        setUsers(res.data);
        //console.log(jwt_decode(localStorage.getItem("token")).sub);
        //
    })
      .catch(function (error) {
        // set off A WARNING - authentication token is expired - register again
        console.log(error);
    })};

  const getAllResources = () =>{
    axios.get(callToAPI+'resources', {
      headers:{
        Accept: 'application/json',
       'Content-Type': 'application/json',
        Authorization: token ,
        "Access-Control-Allow-Origin": "http://localhost:8080"
    }})
      .then(function (res) {
        setResources(res.data);
    })
      .catch(function (error) {
        console.log(error)
    })
  };

  const filledResource = {
    id:0,
    entry: entry,
    author: jwt_decode(localStorage.getItem("token")).sub,
    creation: current
  }

  const stateEntry = (e) => {
    e.preventDefault();
    setEntry(e.target.value);
  }

  const addResource = () => {
    // make sure entry is not null
    axios.post(callToAPI+'addResource', filledResource ,{
      headers:{
        Accept: 'application/json',
       'Content-Type': 'application/json',
        Authorization: token ,
        "Access-Control-Allow-Origin": "http://localhost:8080"
    }})
      .then(function (res) {
        //setResources(res.data);
        getAllResources();
        //
    })
      .catch(function (error) {
        // set off A WARNING - authentication token is expired - register again
        console.log(error);
    })

  }

  const deleteResource = (resId) => {
    // finish this
    axios.delete(callToAPI + "deleteResource/"+ resId,{
      headers:{
        Accept: 'application/json',
       'Content-Type': 'application/json',
        Authorization: token ,
        "Access-Control-Allow-Origin": "http://localhost:8080"
    }})
      .then(function (res) {
        getAllResources();
        //
    })
      .catch(function (error) {
        // set off A WARNING - authentication token is expired - register again
        console.log(error);
        setShowAlert(true);
    })
  }

  const deleteUser = (resId) => {
    axios.delete(callToAPI + "deleteUser/"+ resId,{
      headers:{
        Accept: 'application/json',
       'Content-Type': 'application/json',
        Authorization: token ,
        "Access-Control-Allow-Origin": "http://localhost:8080"
    }})
      .then(function (res) {
        getAllUsers();
    })
      .catch(function (err) {
        console.log(err);
        setShowAlert(true);
    })
  }

  const showUserBoard = () => {
    getAllUsers();
    setShowUsers(true);
  }

  const showResources = () => {
    getAllResources();
    setShowUsers(false);
  }

//add button to delete
    return (
      <div className="App">
        <AuthApp />
        <div className="main">
          <div className="child" id="toolbar">
          <button className="simpleButton" onClick={()=> showUserBoard()}>Show all users</button>
          <button className="simpleButton" onClick={()=> showResources()}>Show all resources</button>
          <button className="simpleButton" onClick={()=> addResource()}>Add a resource</button>
          <input className="simpleInput" onChange={stateEntry} required value={entry}></input>
          </div>

          <div className="child" id="display">

          {showExpired?
          <p className="expiration"><b>Your token is expired - register again</b></p>
          :
          null
          }
          {showAlert?
            <Alert className="alert">
            <Alert.Heading>Non-admins can't make this action!
            <button className="smallButton" onClick={() => setShowAlert(false)}>x</button>
            </Alert.Heading>
            </Alert>
          : null}
          {showUsers? 
           <div className="resourceDisplay" id="users">
           {users.map((res) => <div className="userEntry" key={res.id}>{res.username}
           <button className="smallButton" onClick={()=> deleteUser(res.id)}>x</button></div>
           )}
         </div>
          :
          <div className="resourceDisplay" id="resources">
              {resources.map((res) => 
              <div key={res.id} className="blogpost"><b>{res.author} on {res.creation} </b> 
              <button className="smallButton" onClick={()=> deleteResource(res.id)}>x</button>
              <p>{res.entry} </p>
              </div>)}
            </div>
          }
          </div>
        </div>
      </div>
    );
  }