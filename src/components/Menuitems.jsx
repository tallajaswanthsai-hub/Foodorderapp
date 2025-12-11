import { useContext } from "react";
import { Storecontext } from "../Storecontext";



const Menuitems = ({id,name,image,description,price}) => {
  const{cartitem,Addtocart,Removefromcart,}=useContext(Storecontext);
   
  return (
    
        <div  className="  m-3 rounded-2xl overflow-auto shadow-lg  relative ">
                <img src={image}  className=" h-60 w-80 object-cover "></img>
                {!cartitem[id]?<img src="/Foodorderapp/images/add_icon_white.png" onClick={()=>Addtocart(id)} className="absolute bottom-30 right-3 "></img>:
                <div className="flex items-center bg-white absolute bottom-30 right-3 rounded-2xl p-2">
               
                <img src="/Foodorderapp/images/remove_icon_red.png" onClick={()=>Removefromcart(id)}/>
                 <p className="px-2">{cartitem[id]}</p>
                 <img src="/Foodorderapp/images/add_icon_green.png" onClick={()=>Addtocart(id)}/>
                </div>}

                <div className="p-3 ">
                <div className="flex justify-between  items-center">
                <h1 className="font-bold">{name}</h1> <img src="/Foodorderapp/images/rating_starts.png" className="h-4"/></div>
                <p className="text-neutral-500">{description}</p>
                <h1 className="font-semibold text-orange-500" > ₹{price}</h1>
                </div>


                </div>
      

  )
}

export default Menuitems
