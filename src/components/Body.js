import { useState } from "react";
import { restaurants } from "./Constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurantInfo) {
  return restaurantInfo.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

export const BodyComponent = () => {
  const [restaurantInfo] = useState(restaurants);
  const [tempRestaurantInfo, setTempRestaurantInfo] = useState(restaurantInfo);
  const [searchText, setSearchText] = useState("KFC");

  searchRestaurants = (searchValue, restaurantInfo) => {
    setSearchText(searchValue);
    const filteredData = filterData(searchValue, restaurantInfo);
    setTempRestaurantInfo(filteredData);
  };
  return (
    <>
      <div className="search-container">
        {/* <input type="text" placeholder="Search" value={searchText} 
    onChange={(e)=> setSearchText(e.target.value)}/> */}
        {/* <button className="seach-button" onClick={()=> {
      const filteredData  =  filterData(searchText, restaurantInfo);
      setTempRestaurantInfo(filteredData);
    }}>Search</button> */}

        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => searchRestaurants(e.target.value, restaurantInfo)}
        />
      </div>
      <div className="restaurant-list">
        {/* <RestaurantCard restaurant={cardInfo[0]}></RestaurantCard>
      <RestaurantCard restaurant={cardInfo[1]}></RestaurantCard>
      <RestaurantCard restaurant={cardInfo[2]}></RestaurantCard>
      <RestaurantCard restaurant={cardInfo[3]}></RestaurantCard>
      <RestaurantCard restaurant={cardInfo[4]}></RestaurantCard>
      <RestaurantCard restaurant={cardInfo[5]}></RestaurantCard> */}
        {tempRestaurantInfo.map((restaurant, index) => {
          return <RestaurantCard {...restaurant} key={index} />;
        })}
      </div>
    </>
  );
};

export default BodyComponent;
