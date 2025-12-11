import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Storecontext } from '../Storecontext';



const navbar = ({setshowLogin}) => {

  const location = useLocation();       
  
  const {Totalitemscost} = useContext(Storecontext)

  const isCartPage = location.pathname === "/cart";   
  const isHomePage = location.pathname === "/";       
  return (
    <div  className=" p-5 md:px-10 mx-auto md:w-[80%] rounded-2xl flex  mb-5 justify-between items-center">
     <h1 className=" font-bold text-orange-500 md:text-[25px] text-[15px] "  >MyFoodWorld! </h1>
     <div className='flex' >
        <div  className='relative  pt-1'>
     <Link to="/cart">
      <div>
        {isHomePage && (
          <Link to="/cart">
          <FontAwesomeIcon icon={faBagShopping} style={{ color: "#254274"  }} size="2xl"  />
          <div className= {Totalitemscost()===0?"":"h-2 w-2 rounded-2xl bg-red-600 absolute top-0 right-1"} ></div>
          </Link>
        )}

        {isCartPage && (
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} style={{ color: "#2d518f" }} size="2xl" />

          </Link>
        )}
      </div>
     </Link></div>
<button className=' p-1 px-4  border-1  rounded-2xl ml-5 text-orange-400 font-semibold' onClick={()=>setshowLogin(true)} >Login</button>
     </div>
    </div>
  )
}

export default navbar
