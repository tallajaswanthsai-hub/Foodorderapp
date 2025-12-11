

import { menu_list } from "../assets/asserts"


const Menu = ({category,setCategory}) => {
  return ( 
    <div className='mt-20 text-[20px]  ' id="menu" >
      <h1 className='text-[25px] font-semibold'> Explore our menu</h1>
      <p className='text-2xl'>choose your favourite dishes order and enjoy the meal! </p>
      <div className="flex gap-6.5 my-5  items-center cursor-pointer     overflow-scroll w-[85vw]   s "  >
      {menu_list.map((item,idx)=>{
      return( <div key={idx} onClick={()=>setCategory(prev=>prev===item.menuname?"All":item.menuname)} className="flex flex-col items-center shrink-0"><img className="h-[150px] w-[150px] rounded-full" id={category===item.menuname?"active":""} src={item.menuimage} ></img>
       <h1 className="font-medium text-neutral-600">{item.menuname}</h1>
       </div>)
      })
      
      }
      </div>
      <hr className='my-10 bg-neutral-500 '></hr>

    </div>
  )
}

export default Menu;
