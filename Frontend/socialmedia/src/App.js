
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home';
import Navbar from './Components/Nabvar';
import Profile from './Components/Profile';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import CreatePost from './Components/creatPost';
 

function App() {
 
  return (
    <BrowserRouter>
    <div className="App">      
      <Navbar/>
      
      <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/createPost" element={<CreatePost/>}></Route>
        </Routes>
        <ToastContainer theme='dark'/>        
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
