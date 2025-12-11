

const header = () => {
  return (
    <>
    <div className=' max-sm:h-[17vh] 2xl:h-[80vh] w-[90%] mx-auto  relative   md:h-[28vh]  lg:h-[60%] '>
        <img src="./images/header_img.png" className='h-[100%]w-[100%] '></img>
         
<div className='absolute md:bottom-15 lg:left-20 w-[35%] animation  bottom-3 left-3  md:left-10 lg:w-[40%] lg:bottom-10  xl:bottom-20  xl:w-[30%] 2xl:w-[35%]'>
        <h1 className=' 2xl:text-[55px] text-white md:text-[30px] lg:text-[40px] '>Order your favourite food here</h1>
        <p className='text-[17px] text-white hidden lg:flex '>choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. </p>
        <button  className='bg-white p-2 rounded-2xl mt-3 text-neutral-500 hidden md:flex'><a href="#menu">view menu</a></button></div></div>

        
</>
   
  )
}

export default header
