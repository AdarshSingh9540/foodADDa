import { Accordion } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () =>{
    const cartItems= useSelector((store)=>store.cart.item)
    return <div className="text-center m-5 p-5">
       <h1 className="font-bold text-2xl">Cart</h1> 
 
    </div>
}

export default Cart;