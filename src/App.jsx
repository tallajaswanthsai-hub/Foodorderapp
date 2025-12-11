

import {  useState } from "react"
import Login from "./components/login"
import { Route, Routes } from "react-router-dom"
import Cart from "./components/Cart"
import Home from "./components/Home"
import Navbar from "./components/navbar"





const App = () => {
  
  

  const[showlogin,setshowLogin]=useState(false);

 

 



  return (
    <div className="" >
      {showlogin?<Login setshowLogin={setshowLogin}  />:<></>}
      <Navbar setshowLogin={setshowLogin}/>
  
       
      

      <Routes>
         <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
       
      </Routes>

      
    </div>
  )
}

export default App

