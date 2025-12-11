import { createContext, useState } from "react";
import { foodlist } from "./assets/asserts";


export const Storecontext=createContext(null)


const StoreContextProvider=(props)=>{


 const [cartitem,setCartitem]=useState({});

 const Addtocart=(id)=>{
    if(!cartitem[id]){
setCartitem((prev)=>({...prev,[id]:1}))
    }
else{
    setCartitem((prev)=>({...prev,[id]:prev[id]+1}))
}
 }

 const Removefromcart=(id)=>{
    setCartitem((prev)=>({...prev,[id]:prev[id]-1}))
 }
  

const Totalitemscost=()=>{
let totalamount=0;
for(const item in cartitem){
    if(cartitem[item]>0){
let iteminfo=foodlist.find((product)=>product.id===item);
totalamount+=iteminfo.price*cartitem[item];
    }
}
return totalamount;

}


const Contextvalue={
        foodlist,Addtocart,Removefromcart,cartitem,setCartitem,Totalitemscost
};
return (
    <Storecontext.Provider value={Contextvalue}>
        {props.children}
    </Storecontext.Provider>
)

}

export default StoreContextProvider