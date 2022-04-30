import AuthApp from "./AuthApp";
import './App.css';

import axios from 'axios';
import { useState, useEffect } from "react";

const callToAPI = 'http://localhost:8080/api/';

export default function Authorised() {

  const [entry, setEntry] = useState("");
  const [resources, setResources] = useState([]);
  const [id, setId] = useState(0);

  window.onbeforeunload = () => {
    // when browser is closed, remove auth token
    localStorage.removeItem('token');
  }

  useEffect(() => {
    getAllResources();
  }, []);

  const showResources = () => { 
    getAllResources();
    document.getElementById("users").style.display="none"; 
    document.getElementById("resources").style.display="block"; 
  }

  const showUsers = () => { 
    getAllUsers();
    document.getElementById("resources").style.display="none"; 
    document.getElementById("users").style.display="block"; 
  }
  
  const getAllUsers = () => {
    var token = localStorage.getItem('token');
    axios.get(callToAPI+'users', {
      headers:{
        Accept: 'application/json',
       'Content-Type': 'application/json',
        Authorization: token ,
        "Access-Control-Allow-Origin": "http://localhost:8080"
    }})
      .then(function (res) {
        console.log(res.data);
        //
    })
      .catch(function (error) {
        // set off A WARNING - authentication token is expired - register again
        console.log(error);
    })};

  const getAllResources = () =>{
    var token = localStorage.getItem('token');
    axios.get(callToAPI+'resources', {
      headers:{
        Accept: 'application/json',
       'Content-Type': 'application/json',
        Authorization: token ,
        "Access-Control-Allow-Origin": "http://localhost:8080"
    }})
      .then(function (res) {
        setResources(res.data);
        //
    })
      .catch(function (error) {
        // set off A WARNING - authentication token is expired - register again
        console.log(error);
    })
  };

  const filledResource = {
    id:0,
    entry: entry
  }

  const stateEntry = (e) => {
    e.preventDefault();
    setEntry(e.target.value);
  }

  const addResource = () => {
    var token = localStorage.getItem('token');
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

  const deleteResource = () => {
    var token = localStorage.getItem('token');
    // finish this
    axios.delete(callToAPI + "resources/"+ id,{
      headers:{
        Accept: 'application/json',
       'Content-Type': 'application/json',
        Authorization: token ,
        "Access-Control-Allow-Origin": "http://localhost:8080"
    }})
      .then(function (res) {
        console.log(res.data);
        //
    })
      .catch(function (error) {
        // set off A WARNING - authentication token is expired - register again
        console.log(error);
    })
  }

//add button to delete
    return (
      <div className="App">
        <AuthApp />
        <div className="main">
          <div className="child" id="toolbar">

          <button className="simpleButton" onClick={()=> showUsers()}>Show all users</button>
          <button className="simpleButton" onClick={()=> showResources()}>Show all resources</button>
          <button className="simpleButton" onClick={()=> addResource()}>Add a resource</button>
          <input className="simpleInput" onChange={stateEntry} required value={entry}></input>
          
          </div>

          <div className="child" id="display">
            <div className="resourceDisplay" id="resources">
              {resources.map((res) => <p>{res.entry}</p>)}
            </div>
            <div className="resourceDisplay" id="users">
              {users.map((res) => <p>{res.username}</p>)}
            </div>
          </div>
        </div>
      </div>
    );
  }