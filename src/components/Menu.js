import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/Constant";
import Shimmer from "./Shimmer";
import useRes from "../utils/useRes";
import AccordionUsage from "./Accordion";

const Menu = () =>{

    // const [res , setRes] = useState({});

    const {resId} = useParams();

    const res = useRes(resId);
    console.log(res)
  
    // let cat = res.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((e) =>
    // e.card?.card?.hasOwnProperty("itemCards")
    // )
    // console.log(cat)
    return !res? <Shimmer/>: (
        <div className="Menu">
   {/* {console.log(res?.cards[0]?.card?.card?.info)} */}
          <div className="bg-gray-500 h-64 flex items-center justify-center">
          <div className="left"><img className="w-64  h-48 rounded-md m-4" src={IMG_CDN_URL+res?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="" /></div>
         <div className="text-white text-center">
         <h2 className="text-4xl font-bold mx-12" >{res?.cards[0]?.card?.card?.info?.name}</h2>
          <h3 className="text-xl ml-4 mt-3">{res?.cards[0]?.card?.card?.info?.cuisines.join(" , ")}</h3>
          <h3 className="text-xl"> {res?.cards[0]?.card?.card?.info?.areaName} , {res?.cards[0]?.card?.card?.info?.city}</h3>
          <h3 className="text-xl">{res?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
          <h3 className="text-xl">{res?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
         </div>
               </div>
{/* 
               <div className="flex text-center justify-center w-6/12 m-auto">
      <p>
        {cat.map((element,index) => (
          <AccordionUsage key = {index} data={element?.card?.card} />
                
        ))}
      </p>
     </div> */}
               
        </div>
      );
    };
    
export default Menu;