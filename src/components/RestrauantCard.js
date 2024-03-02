import React, { useState } from 'react';
import { IMG_CDN_URL } from '../utils/Constant'; // Import IMG_CDN_URL here
import Shimmer from './Shimmer';

const RestrauantCard = (props) => {
  const isOpen = props.restaurant.info.isOpen;
  const [isOpenState, setIsOpenState] = useState(isOpen);

  if (isOpenState === true) {
    setIsOpenState("Open");
  }
  if(isOpenState===false){
    setIsOpenState("close");
  }
  
  return !props ? <Shimmer /> : ( 
    <div className='m-2 border-2 p-2 w-60 h-full rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-300 hover:scale-110 transition-transform duration-300 text-slate-800 relative'>
      <div className="absolute top-0 left-0">
        <h1 className="isOpen bg-green-500 text-white p-1 m-1 text-l rounded-md" >{isOpenState.toString()}</h1>
      </div>
      <div className="card">
        <img src={IMG_CDN_URL + props.restaurant.info.cloudinaryImageId} alt="img" /> 
        <h1 className="heading text-xl font-semibold">{props.restaurant.info.name}</h1>
        <h4 className="heading">
          {props.restaurant.info.cuisines.join(", ")}
        </h4>
        <h3 className="heading">{props.restaurant.info.locality}</h3>
        <h4 className="heading">{props.restaurant.info.avgRatingString} stars</h4>
        <h4 className="heading">{props.restaurant.info.costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestrauantCard;
