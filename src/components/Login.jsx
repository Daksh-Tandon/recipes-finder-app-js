import React, { useState } from "react";
import "../login.css";
import Mainpage from "./Mainpage";

const Login = () => {
  const [n, setn] = useState("");
  const [p, setp] = useState("");
  const [log, setlog] = useState(false);
  const handleinp=()=>{
    if(n && p){
     
        setlog(true);
      
    }
    else{
      alert("please fill valid credentials");
    }

    
  }
  if(log){
    return (<Mainpage name={n} / >)
  }

  return (
    <div className="Head">
      <h1>Login Your Account</h1>
      <div className="container">
        <form >
          <input
            type="text"
            placeholder="Enter your Name"
            value={n}
            onChange={(e) => setn(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={p}
            onChange={(e) => setp(e.target.value)}
          />
         
        </form>
         <button onClick={handleinp} className="submit" >
            Login
          </button>
      </div>
    </div>
  );
};

export default Login;
