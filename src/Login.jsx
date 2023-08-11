import React from "react";
import { useState } from "react";


const Login = () =>{
    const[username,setUsername] = useState("");
    const[Password,setPassword] =useState("");
    const user ={username:"abc@gmail.com",Password:"12345"}
    const handleSubmit = () =>{
        if(username==user.username && Password==user.Password){
            localStorage.setItem("usename",JSON.stringify(user.username));
            localStorage.setItem("password",JSON.stringify(user.Password));
            alert("your username and password correct");
        }else{
            alert("incorrect")
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
            <label name="usename">Username:</label>
            <input type="text" value={username} placeholder="Enter a username" onChange={({ target }) => setUsername(target.value)}/>
            </div>
            <div>
            <label name="Password">Password:</label>
            <input type="text" value={Password} placeholder="Enter a Password" onChange={({ target }) => setPassword(target.value)}/>
            </div>
            <button type="submit">Login</button>
         </form></>
    )
}

export default Login;