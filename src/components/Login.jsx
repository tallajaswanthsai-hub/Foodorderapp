import { useState } from "react"

  

const Login = ({setshowLogin}) => {
    const[current,setcurrent]=useState("Login")

    
  return (
    <div className=" inset-0 bg-black/50 fixed w-100vh
                    flex items-center justify-center z-1 ">
    <div className="relative  bg-amber-50 p-15 rounded-2xl w-100 ">
      <form className="flex   flex-col  justify-center  gap-2 ">
      
        <h1 className="flex justify-center uppercase text-orange-400 text-2xl font-semibold">{current}</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/10728/10728089.png" className="absolute top-4 right-5 w-5 h-5 rounded-2xl  " onClick={()=>setshowLogin(false)}/>
        {current==="sign in"? <div className="flex flex-col"> <label htmlFor="name" >Name:</label>
        <input id="name" type="text" placeholder="Enter your name" required className="border-1 p-2 rounded-xl"></input></div>:<></>}
       
         <label htmlfor="mail">Gmail:</label>
        <input id="mail" type="mail" placeholder="Enter your Gmail" pattern=".+gmail.com" required className="border-1 p-2 rounded-xl"></input>
         <label htmlfor="password" >Password:</label>
        <input id="password" type="password" placeholder="enter password" minLength={8} required className="border-1 p-2 rounded-xl" ></input>
        {current==="sign in"?<label><input type="checkbox" required />By continuing,i agree to the terms of use & privacy policy.</label>:<></>}
        
        <button className="bg-orange-400 rounded-2xl py-2 w-auto px-3 mx-auto font-semibold text-white mt-2">{current==="sign in"?"Create Account":"Login"}</button>
        
      </form>
      <p>{current==="sign in"?"Already have Account?":"Create Account?"}<span ><button className="text-blue-600 font-semibold ml-2 mt-4" onClick={current==="sign in"?()=>setcurrent("Login"):()=>setcurrent("sign in")}>{current==="Login"?"Click here":"Login"}</button></span></p> 
    </div>
    </div>
  )
}

export default Login
