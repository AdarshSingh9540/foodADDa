import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { Logo_CDN } from "../utils/Constant";
import { useSelector } from "react-redux";



const loggInUser= () =>{
  return false;
}
const Header = ()=>{
  const [isLogIn,setIsLogIn] = useState(false);

const cartItems = useSelector((store)=>store.cart.items);

    return(
      <>
       <div className="header-wrapper bg-white shadow-lg sticky top-0 z-50">
      <div className=" container mx-auto flex justify-between h-20 items-center">
        <img className="m-2 w-16" src={Logo_CDN} alt="image" />
        <ul className="w-6/12 flex justify-between m-2 p-2 items-center font-semibold" >
          <li> <Link className=" " to="/">Home</Link> </li>
          <li className="hidden sm:block"><Link  to="/Contact">Contact Us</Link></li>
          <li><Link  to="/Cart"> 🛒({cartItems?.length} )items</Link></li>
          <li className="hidden sm:block" ><Link  to="/About">About US</Link></li>
          <li className="hidden sm:block"> <Link>{
      isLogIn ? <button className="bg-red-600 p-1 rounded-md mx-2" onClick={()=> setIsLogIn(false)} >Logout</button> : <button  className="bg-green-600 p-1 rounded-md mx-2" onClick={()=> setIsLogIn(true)}>Login</button> 
      }</Link></li>
        </ul>
      </div>
      </div>
    </>
    )
    }

  export default Header;