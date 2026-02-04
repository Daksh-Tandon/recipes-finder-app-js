import React from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Contact from './components/Contact';
import { Route,Routes } from 'react-router-dom';
import about from "./assets/about.png"
function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<img src={about} style={{height:"100vh",width:"100vw" ,objectFit:"contain"}}></img>}></Route>
        
      </Routes>

    </div>
  )
}
export default App;
