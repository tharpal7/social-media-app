import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
useNavigate
import "./home.css"
const Home = () => {

  const naviaget = useNavigate()

  const [data, setData] = useState([])
  

  useEffect(() => {
    const token = localStorage.getItem("jwt")
    if (!token) {
      naviaget('/signup')
    }
    fetch("http://localhost:5000/allposts", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
    })
      .then(res => res.json())
      .then(result => setData(result))
      // .then(result=>setHomeDatas(result))
      .catch(err => console.log(err))
  })

  const profileLink = () => {
    naviaget("/profile")
  }
  return (

    <div className='home'>
      {data.map((posts, key) => {
        return (
          //  cart
          <div className='card'key={key} >
            {/* cardHeader */}
            <div className='card-header'>
              <div className='card-pic'>
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="profil" onClick={profileLink} />
              </div>
              <h5>{posts.postedBy.name}</h5>              
            </div>
            {/* card image */}
            <div className='card-image'>
              <img src={posts.photo} alt="post-img" />
            </div>
            {/* card-content */}
            <div className='card-content'>
              <span class="material-symbols-outlined">
                favorite
              </span>
              <p>1 like</p>
              <p>{posts.body}</p>
            </div>
            {/* add comment */}
            <div className='add-comment'>
              <span className="material-symbols-outlined">
                mood
              </span>
              <input type="text" placeholder='Add a comment' />
              <button className='comment'>Post</button>
            </div>
          </div>
        )

      })}    

    </div>
  )
}

export default Home
