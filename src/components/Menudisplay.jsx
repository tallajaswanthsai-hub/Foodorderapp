import { useContext,  } from "react"
import { Storecontext } from "../Storecontext"
import Menuitems from "./Menuitems";



const menudisplay = ({category}) => {
    
    const {foodlist}=useContext(Storecontext)
  return (
    <div>
        <h1 className="text-2xl mb-4"> Top dishes near you</h1>
        <div className="grid lg:grid-cols-3  2xl:grid-cols-4 md:grid-cols-2 mb-10 gap-4">
            {foodlist.map((item,idx)=>{
                if(category==="All" || category===item.category){
                return < Menuitems key={idx} id={item.id} name={item.name} image={item.image} description={item.description} price={item.price}/>
                }
              

            })}
        </div>
      
    </div>
  )
}

export default menudisplay
