import React from 'react'
import "./profile.css"

const Profile = () => {
  return (
    <div className='profile'>
      {/* Profile frame */}
      <div className='profile-frame'>
        {/* profile pic */}
        <div className='profile-pic'>
          <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className='profile-data'>
          <h1>César Rincón</h1>
          <div className='profile-info' style={{display:"flex"}}>
            <p>40 posts</p>
            <p>40 followers</p>
            <p>40 following</p>
          </div>
        </div>
      </div>
      <hr style={{width:"100%",opacity:"0.8",margin:"25px auto"}}/>
      <div className='gallery'>
        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="pic"/>

        <img src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="pic"/>

        <img src="https://images.unsplash.com/photo-1520183802803-06f731a2059f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="pic"/>

        <img src="https://images.unsplash.com/photo-1475692277358-d66444784d6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="pic"/>

        <img src="https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="pic"/>

        <img src="https://images.unsplash.com/photo-1542892650-7659c76be2e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="pic"/>
      </div>
    </div>
  )
}

export default Profile
