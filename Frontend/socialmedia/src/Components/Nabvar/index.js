import React from 'react'
import { Link,Navigate, useNavigate } from 'react-router-dom'
import '../Nabvar/navbar.css'

const Navbar = () => {
  const loginStatu = () =>{
    const token = localStorage.getItem("jwt")
    if(token){
      return [
        <>
        <Link to="/Profile">
          <li>Profile</li>
          </Link>
          <Link to="/createPost">
          <li>CreatePost</li>
          </Link>
          <Link to={""}>
          <button className='PrimaryBtn' onClick={()=>localStorage.removeItem("jwt")}> Log Out</button>
          </Link>
        </>        
      ]
    }else {
      return[
        <>
        <Link to="/signup">
          <li>Signup</li>          
          </Link>
        <Link to="/signin">
          <li>Signin</li>
        </Link>
        
        </>
      ]
    }
  }


  const naviaget = useNavigate()
  const navToHome = ()=>{
naviaget("/")
  }
  return (
    <div className='navbar'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQHUNH0qqvYcXEHzkdDQwVxaBrmwOdJoJsg&usqp=CAU"  alt='loading' onClick={navToHome} style={{cursor:'pointer'}}/>  
      <div className='route'>
      <ul>
        {loginStatu()}
        </ul>
        </div> 
       
      </div>
  )
}

Navbar.propTypes = {}

export default Navbar