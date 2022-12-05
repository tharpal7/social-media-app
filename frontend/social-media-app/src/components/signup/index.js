import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import "./signup.css"

const SignUp = () => {
  const navigate =useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  
  // tost function
  const notifyA = (msg)=>{
    toast.error(msg)
  }
  const notifyB=(msg)=>{
    toast.success(msg)
  }
 
  const postData=()=>{
  //  sending data to database
  fetch("http://localhost:5000/signup",{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name:name,
      email:email,
      username:username,
      password:password
    })    
  })
  .then((res)=>{
    console.log(res)
    res.json()
  })
  .then(data=>{
    if(data.error) {
      notifyA(data.error)       
    } else  {
      notifyB(data.message)
      navigate("/signin")
    }
    console.warn(data)})        
  } 
 

  return (
    <div className='signUp'>
      <div className='form-container'>
        <div className='form'>
          <img className="signUpLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweiasyeEx6laHdCkuP4JfVM9wBDx074bXpQ&usqp=CAU" alt="image" />
          <p className='loginPara'>
            Signup to see photos and videos <br />froms your friends
          </p>
          <div>
            <input type="email" name="email" id="email" value={email.email} placeholder="Mobile Number or Email" onChange={(e) => {
              setEmail(e.target.value)
            }} />
          </div>
          <div>
            <input type="text" name="name" id="name" value={name.name} placeholder="fullname" onChange={(e) => {
              setName(e.target.value)
            }} />
          </div>
          <div>
            <input type="text" name="username" id="username" value={username.username} placeholder="username" onChange={(e) => {
              setUsername(e.target.value)
            }} />
          </div>
          <div>
            <input type="password" name="password" id="password" value={password.password} placeholder="password" onChange={(e) => {
              setPassword(e.target.value)
            }} />
          </div>
          <p className='loginPara' style={{ fontSize: "12px", margin: "3px 0px" }}>By signing up, you agree to our Terms , Privacy<br /> Policy and Cookies Policy .</p>
          <input type="submit" id="submit-btn" value="Sign up" onClick={()=>{
           postData()
          }}
          />
        </div>

        <div className='form2'>
          Have an account?
          <Link to="/signin"><span style={{ color: "blue", cursor: "pointer" }}>Sign in</span></Link>
        </div>

      </div>
    </div>
  )
}


export default  SignUp 