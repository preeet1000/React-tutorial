import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerComponent from "./Shimmer";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState(null);
  useEffect(() => {
    getRestuarantmenuDetails();
  }, []);

  async function getRestuarantmenuDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9483469&lng=77.70246279999999&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    // console.log(json?.data?.cards)
    const cards = json?.data?.cards?.filter((data) => data?.card?.card?.info);
    const restaurant = cards?.filter((val) => val?.card?.card?.info?.id == id);
    setRestaurantDetail(restaurant[0]?.card?.card?.info);
  }
  return !restaurantDetail ? (
    <ShimmerComponent />
  ) : (
    <div className="menu">
      <h1>{restaurantDetail?.name}</h1>
      <h3>Restaurant Id : {restaurantDetail?.id} </h3>
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
