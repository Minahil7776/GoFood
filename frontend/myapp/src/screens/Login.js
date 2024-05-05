import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {Link,useNavigate} from 'react-router-dom'
import axios from "axios"

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [isLogin,setLogin] = useState(false);
  const [name,setname] = useState("");
  const navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:5000/Login",{email,password})
          if(response.data.message === "Login Successfully"){
              window.alert("Login Successfully")
              setLogin(true)
              setname(response.data.name)
              navigate("/")
          }
  }catch(error){
      console.log(error)
      window.alert("Error")
  }
  }
  
  return (
    <div>
      <div><Navbar isLogin={isLogin} name={name} /></div>
      <div className='fs-1 d-flex' style={{justifyContent:"center"}}>Login</div>
      <div className='container mt-3'>
        <form method='POST'>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className="form-control" id="exampleInputPassword1" autoComplete='off' />
          </div>
          <button type="submit" className="btn btn-success" onClick={handleLogin} >Submit</button>
          <Link to="/SignUp" className="m-3 btn btn-danger">Not have an account</Link>
        </form>
      </div>
    </div>
  )
}
