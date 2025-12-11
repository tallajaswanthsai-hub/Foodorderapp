
import Header from "./Header"
import Menu from "./Menu"
import Menudisplay from "./Menudisplay"
import Footer from "./Footer"
import { useState } from "react"

const Home = () => {

  const [category, setCategory]= useState("All");
  
  return (
    <div>
     <Header/>
      <div className="w-[85%] mx-auto ">
      <Menu category={category} setCategory={setCategory}/>
      <Menudisplay category={category}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
