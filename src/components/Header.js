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
      <div className=" flex justify-between  h-20 shadow-lg m-4 ">
        <img className="m-2" src={Logo_CDN} alt="image" />
        <ul className="w-6/12 flex justify-between m-2 p-2 items-center" >
          <li> <Link className="" to="/">Home</Link> </li>
          <li className=""><Link  to="/Contact">Contact Us</Link></li>
          <li><Link  to="/Cart"> 🛒-{cartItems.length} items</Link></li>
          <li><Link  to="/About">About US</Link></li>
          <li> <Link>{
      isLogIn ? <button className="bg-red-600 p-1 rounded-md mx-2" onClick={()=> setIsLogIn(false)} >Logout</button> : <button  className="bg-green-600 p-1 rounded-md mx-2" onClick={()=> setIsLogIn(true)}>Login</button> 
      }</Link></li>
        </ul>
      </div>
    </>
    )
    }

  export default Header;