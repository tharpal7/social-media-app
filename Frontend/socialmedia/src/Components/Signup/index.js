
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import "../Signup/signup.css"

const Signup = () => {
  const naviaget = useNavigate()
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Toast function
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg)

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

  const postData = async () => {
    // checking email
    if (!emailRegex.test(email)) {
      return notifyA("invalid email")
      
    }
    else if (!passwordRegex.test(password)){
      return notifyA("Passsword must contain at least eight character, including at least one number and one includes both lower and uppercase letter and special character ")
     
    }
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        userName: userName,
        email: email,
        password: password
      })
    })
    const data = await res.json()
    if (data.error) {
      notifyA(data.error)
    } else {
      notifyB(data.message)
      naviaget("/signin")
    }
    console.log(data)
  }


  return (
    <div className='signup'>
      <div className='form-container'>
        <div className='form'>
          <img className='signuplogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQHUNH0qqvYcXEHzkdDQwVxaBrmwOdJoJsg&usqp=CAU' alt='loading' />
          <p className='loginpara'>
            Sign up to see photos and videos <br></br> from your friends.
          </p>
          <div>
            <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => {
              setEmail(e.target.value)
            }} />
          </div>
          <div>
            <input type="text" name="name" id="name" placeholder="Fullname" value={name} onChange={(e) => {
              setName(e.target.value)
            }} />
          </div>
          <div>
            <input type="text" name="userName" id="username" placeholder="UserName" value={userName} onChange={(e) => {
              setUserName(e.target.value)
            }} />
          </div>
          <div>
            <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => {
              setPassword(e.target.value)
            }} />
          </div>
          <p className="loginpara">
            People who use our service may have uploaded <br />
            your contact information to Instagram
          </p>
          <input type="submit" id="submit-btn" value="Sign up" onClick={() => {
            postData()
          }} />
        </div>
        <div className='form2'>
          Aleady have an account ?
          <Link to="/signin">
            <span style={{
              color: "blue",
              cursor: "pointer"
            }}>Signin
            </span></Link>

        </div>
      </div>

    </div>
  )
}

export default Signup