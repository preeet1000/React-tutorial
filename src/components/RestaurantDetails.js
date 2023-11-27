import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerComponent from "./Shimmer";
import useRestaurant from "../utility/helper/useRestaurant.js";
import { useDispatch } from "react-redux";
import { addItems } from "../utility/helper/cartSlice";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurantDetail = useRestaurant(id);
  const dispatch = useDispatch();
  handleAdditems = () => {
    dispatch(addItems('grapes')); // {payload: 'grapes'}
  }
  return !restaurantDetail ? (
    <ShimmerComponent />
  ) : (
    <div className="menu">
      <h1>{restaurantDetail?.name}</h1>
      <h3>Restaurant Id : {restaurantDetail?.id} </h3>
      <button className=" w-auto h-8 mt-2 mb-2 bg-red-600" onClick={() => {handleAdditems()}}>AddItems</button>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurantDetail?.cloudinaryImageId
        }
      />
      <h3>{restaurantDetail?.avgRating}</h3>
    </div>
  );
};

export default RestaurantDetails;
