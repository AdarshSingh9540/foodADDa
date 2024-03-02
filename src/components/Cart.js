import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/Constant";
import { clearCart } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems)
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(removeItem(index));
    };

    const clearCartItems = () => {
        dispatch(clearCart());
    };

    if (!cartItems) {
        return <div>Loading cart...</div>;
    }

    return (
        <div className="text-center m-4 p-4 w-1/2 ml-[25%] items-center">
            <h1 className="font-bold text-2xl">Cart</h1>
            <button
                className="rounded-md shadow-lg mt-2 bg-red-400 p-2 mb-6"
                onClick={clearCartItems}
            >
                Clear Cart
            </button>
            
            {cartItems.map((item, index) => (
                <Accordion key={index}>
                    <AccordionDetails>
                        <div className="flex">
                        <div>
                            <p className="text-green-500">₹ {item?.defaultPrice / 100 || item.price / 100}</p>
                            <p className="text-sm w-3/12 h-10 text-gray-500 overflow-hidden">{item?.description}</p>
                            </div>
                        
             <div className="item-center m-1 p-1 w-48 relative">
                 <img
                   className="rounded-lg  shadow-2xl "
                   alt="image didnt load"
                   src={IMG_CDN_URL + item?.imageId}
                 />
                 <button
                                className="mx-3 rounded-md shadow-md bg-red-400 p-1 mt-1 absolute bottom-0 left-0 "
                                onClick={() => handleDelete(index)}
                            >
                                Remove
                            </button>
               </div>
                        
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}

export default Cart;
