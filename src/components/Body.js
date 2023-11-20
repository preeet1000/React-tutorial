import { useEffect, useState } from "react";
// mock data
import { restaurants } from "./Constants";
import RestaurantCard from "./RestaurantCard";
import ShimmerComponent from "./Shimmer";

function filterData(searchText, allRestaurant) {
  return allRestaurant?.filter((restaurant) =>
    restaurant?.card?.card?.info?.name
      ?.toLowerCase()
      .includes(searchText?.toLowerCase())
  );
}

export const BodyComponent = () => {
  const [allRestaurant, setAllRestaurantInfo] = useState();
  const [filteredRestaurant, filteredSetTempRestaurant] =
    useState([]);
  const [searchText, setSearchText] = useState();

  searchRestaurants = (searchValue, allRestaurant) => {
    setSearchText(searchValue);
    const filteredData = filterData(searchValue, allRestaurant);
    filteredSetTempRestaurant(filteredData);
  };

  // empty dependency array =>  once after render
  // dep array [searchText] => once after inital render + everytime after rerender(my serachText changes)
  useEffect(() => {
    getSwiggyRestaurantsDetails();
  }, []);

  async function getSwiggyRestaurantsDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9483469&lng=77.70246279999999&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    // console.log(json?.data?.cards);
    const list = json?.data?.cards?.filter((data) => data?.card?.card?.info);
    // console.log(list[0].card?.card?.info);
    setAllRestaurantInfo(list);
    filteredSetTempRestaurant(list);
  }

  return allRestaurant?.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <>
      <div className="search-container">
        {/* <input type="text" placeholder="Search" value={searchText} 
    onChange={(e)=> setSearchText(e.target.value)}/> */}
        {/* <button className="seach-button" onClick={()=> {
      const filteredData  =  filterData(searchText, allRestaurant);
      filteredSetTempRestaurant(filteredData);
    }}>Search</button> */}

        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => searchRestaurants(e.target.value, allRestaurant)}
        />
      </div>
      <div className="restaurant-list">
        {/* <RestaurantCard restaurant={cardInfo[0]}></RestaurantCard>
      <RestaurantCard restaurant={cardInfo[1]}></RestaurantCard>
      <RestaurantCard restaurant={cardInfo[2]}></RestaurantCard>
      <RestaurantCard restaurant={cardInfo[3]}></RestaurantCard>
      <RestaurantCard restaurant={cardInfo[4]}></RestaurantCard>
      <RestaurantCard restaurant={cardInfo[5]}></RestaurantCard> */}
        {filteredRestaurant?.length === 0 ? (
          <h3> No Data Found!!</h3>
        ) : (
          filteredRestaurant.map((restaurant, index) => {
            return <RestaurantCard {...restaurant} key={index} />;
          })
        )}
      </div>
    </>
  );
};

export default BodyComponent;
