import React, { useContext, useState } from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import {AuthContext} from "../Context/AuthProvider"
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [email, setEmail] = useState();
    const [password,setPassword] = useState('') ;
    const navigate = useNavigate();

    const {loggedUser,login}= useContext(AuthContext)

     function handleLogin(e){
        e.preventDefault()
        console.log(email,password);

        try{
          const msg = login(email , password)
          if(msg){
            alert(msg);
            navigate("/dashboard")
          }else{
            alert("invalid cridentials");
              navigate("/")
          }
        }catch(error){
          console.log(error);
        }
        
    }
    console.log(loggedUser , "in login page")

  return (
    <div className='container w-50 mx-auto border shadow mt-5 rounded-2 p-3'>
      <form onSubmit={handleLogin}>
        <h1>Login page</h1>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email}
    onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" id="Password" value={password} 
    onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default LoginPage;