
import React from 'react'
import "./App.css"
import Navbar from './navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './components/signin';
import Profile from './components/profile';
import Home from './components/home';
import SignUp from './components/signup';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
        <ToastContainer theme="dark"/>
      </div>
    </BrowserRouter>
  )
}

export default App
