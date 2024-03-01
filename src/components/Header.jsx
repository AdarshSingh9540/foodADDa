import React from 'react'
import useRes from '../utils/useRes';
import { useState } from 'react';

const Header = () => {
    const [isLogIn,setIsLogIn] = useState(false);
     useRes();
    // const cartItems = useSelector((store)=>store.cart.items)
  return (
    <div className='flex w-full justify-between p-2 shadow-lg items-center'>
<div className='w-4/12' > <img className="w-16 h-16" src="https://cdn.octopix.in/uploads/company-logo/2020/12/22/bhukkad-adda-wJFMg3UtbA488gX4Y2hAtxVrJjAnD1tKIRvVV3iJe57xhFE0ARSmwaJhktVWaBitCTW7pVP3NVPWfw1p-350x350.jpg" alt="image" />
        </div>
        <div className="w-5/12 m-2 ">
        <ul className='flex justify-between '>
         <li className="" > Home  </li>
          <li> Contact Us</li>
          <li> items</li>
          <li>About us</li>
        
          <li> {
      isLogIn ? <button  className='bg-red-600 px-1 rounded-sm' onClick={()=> setIsLogIn(false)} >Logout</button> : <button  className='bg-green-600 px-1 rounded-sm' onClick={()=> setIsLogIn(true)}>Login</button> 
      }</li>
         </ul>
        </div>
        


    </div>
  )
}

export default Header