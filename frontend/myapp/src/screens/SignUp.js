import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from "axios";
import Navbar from '../components/Navbar';

function SignUp() {
    const [name,setName] = useState("");
    const [location,setLocation] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit =async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:5000/SignUp",{name,location,email,password})
                console.log(response.data)
                if(response.data === "Account Created"){
                    window.alert("Account Created")
                    navigate("/Login")
                }
        }catch(error){
            console.log(error)
            window.alert("Error")
        }
    }
    return (
        <>
            <Navbar />
            <div className='fs-1 d-flex' style={{justifyContent:"center"}}>SignUp</div>
            <div className='container mt-3'>
                <form method='post'>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" autoComplete='off' name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input type="text" className="form-control" autoComplete='off' name="location" value={location} onChange={(e)=>setLocation(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" autoComplete='off' name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" autoComplete='off' name="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
                    <Link to="/Login" className="m-3 btn btn-danger">Already a user</Link>
                </form>
            </div>
        </>
    );
}

export default SignUp;
