import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import "../Signin/signin.css"

const Signin = () => {
  const naviaget = useNavigate()
  
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

// Tost function
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg)

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const postData = async()=>{
    // checking email
    if (!emailRegex.test(email)){
      notifyA("Invalid email")
    }
    // sending data to server
    const res = await fetch("http://localhost:5000/signin",{
      method:"post",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })
    const data = await res.json()
    if (data.error) {
      notifyA(data.error)
    } else {
      notifyB(data.message)
      console.log(data)
      localStorage.setItem("jwt",data)
      naviaget("/")
    }
    
    console.log(data)
  }
  return (
    <div className='signin'>
      <div className='form-container'>
        
        <div className='form'>

          <img className='signuplogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQHUNH0qqvYcXEHzkdDQwVxaBrmwOdJoJsg&usqp=CAU' alt='loading' />

          <div>
            <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          </div>

          <div>
            <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          </div>

          <input type="submit" id="submit-btn" value="Sign in" onClick={postData} />

        </div>

        <div className='form2'>
          Don't have an account ?
          <Link to="/signup">
            <span style={{
              color: "blue",
              cursor: "pointer"
            }}>
              Signup
            </span>
          </Link>

        </div>
      </div>

    </div>
  )
}

export default Signin