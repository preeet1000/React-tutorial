const RestaurantCard = (props) => (
  <div className="card w-52 h-80 py-2 pl-3 pr-3 shadow-lg bg-gray-100">
    <img
      className="card-img"
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        props?.card?.card?.info?.cloudinaryImageId
      }
    />
    <div className="card-details">
      <h2 className="font-bold text-lg">{props?.card?.card?.info.name}</h2>
      <h3>* {props?.card?.card?.info.avgRating} </h3>
      <h4>{props?.card?.card?.info.cuisines.join(",")}</h4>
    </div>
  </div>
);

export default RestaurantCard;
