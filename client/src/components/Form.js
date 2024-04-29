import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleSubmit= async (e) =>{
    e.preventDefault();
    const requestOptions = {
        method : 'POST' ,
        headers: {
            'Content-Type': 'application/json'
        },
        body :JSON.stringify({ username: username, password: password }) 
    }
    console.log(username,password)
    const response = await fetch('http://localhost:3002/login', requestOptions)
    const data = await response.json();
    if(data){
      navigate('/dashboard')
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br/>
      <br />
      <Link to = "/register">Register Here!</Link>
      <button type = 'submit'>Submit</button>
    </form>
  );
};

export default Form;
