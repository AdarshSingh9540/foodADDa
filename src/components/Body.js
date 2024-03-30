import React, { useState, useEffect } from "react";
import RestrauantCard from "./RestrauantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchInput, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [allRestaurants,setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
useEffect(() => {
  fetchdata();
}, []);

const fetchdata = async () => {
  try {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // optional channing
    console.log(json)
    setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
   
  } catch (error) {
    
    console.log(error);
  }
};


if(!allRestaurants) return <Shimmer/>;
  
  return allRestaurants.length===0?(<Shimmer/>) : (
    <>
      <div className="search-container m-4 px- mx-6 flex flex-row justify-end">
      
        <input
        className="  border  p-1 rounded-md  w-9/12 md:w-3/12 shadow-xl  "
          type="text"
          // className="search-type"
          placeholder="Search.."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn bg-green-600 p-1 px-3 rounded-md mx-2 shadow-lg"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="list  flex flex-wrap justify-evenly text-center text-pretty">

        {filteredRestaurants.map((restaurant,index) =>{ 
          
          const id = restaurant.info.id; // Assuming that 'info' contains the restaurant information
console.log(id);

          return (
         <Link  to={"/restaurant/"+id} key={id} className="mb-7"> <RestrauantCard  restaurant={restaurant} />  </Link>
        );
        })}
      </div>
    </>
  );
};

export default Body;
