import  { useContext } from 'react'
import { Storecontext } from '../Storecontext'



const Cart = () => {
    const{cartitem,foodlist,Removefromcart,Totalitemscost}=useContext(Storecontext);
  return (
    <div>
    <div className=' grid  cart-item w-[80%] mx-auto ' >
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>total</p>
        <p>remove</p>

         
      
    </div>
 <hr className='w-[80%] mx-auto' />
   
    
        {foodlist.map((item,idx)=>{
            if(cartitem[item.id]>0){ 
                return (<div key={idx} className='flex pl-38 mt-3 mb-5 '>
                    <img src={item.image} className=' h-[50px] w-[50px] '></img>
                    <p className='pl-30  w-[230px] '>{item.name}</p>
                    <p className='pl-60 w-[270px]'>{item.price}</p>
                    <p className='pl-50  w-[215px]'>{cartitem[item.id]}</p>
                    
                    <p className='pl-40   w-[200px]'>{item.price*cartitem[item.id]}</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/10728/10728089.png"  className='h-5 w-5 ml-45' onClick={()=>Removefromcart(item.id)} ></img>

                    
                    
                </div>)
                
            }
        })}
        <div className=' flex flex-col gap-3'> 
       <div className='flex w-[30%]    justify-between mx-auto'>
        <p>Subtotal:</p>
        <p>₹{Totalitemscost()}</p>
       </div>
       <div className='flex w-[30%] justify-between  mx-auto'>
        <p>Delivery Fee:</p>
        <p>₹{Totalitemscost()===0?0:70}</p>
       </div>
       <div className='flex w-[30%] justify-between  mx-auto'>
        <p>Total:</p>
        <p>₹{Totalitemscost()===0?0:Totalitemscost()+70}</p>
       </div>
       </div>
       <button className='bg-orange-400 p-2 px-5 rounded-xl mx-auto justify-center flex mt-4 text-[22px] text-white font-semibold w-[10%]'>Pay</button>
        </div>
    
   
  )
}

export default Cart
