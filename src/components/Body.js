import { useContext, useEffect, useState } from "react";
// mock data
import { restaurants } from "./Constants";
import RestaurantCard from "./RestaurantCard";
import ShimmerComponent from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utility/helper/useOnline";
import UserContext from "../utility/helper/UserContext";

function filterData(searchText, allRestaurant) {
  return allRestaurant?.filter((restaurant) =>
    restaurant?.card?.card?.info?.name
      ?.toLowerCase()
      .includes(searchText?.toLowerCase())
  );
}

export const BodyComponent = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, filteredSetTempRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);

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
    const list = json?.data?.cards?.filter((data) => data?.card?.card?.info);
    setAllRestaurant(list);
    filteredSetTempRestaurant(list);
  }
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>User is offline !!</h1>;
  }

  return allRestaurant?.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <>
      <div className="search-container bg-gray-200 pl-4 mb-4 h-10">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => searchRestaurants(e.target.value, allRestaurant)}
        />

        <input
          type="text"
          placeholder="Search"
          className="ml-4"
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
        />

        <input
          type="text"
          placeholder="Search"
          className="ml-4"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="restaurant-list flex flex-wrap justify-between">
        {filteredRestaurant?.length === 0 && allRestaurant?.length ? (
          <h3> No Data Found!!</h3>
        ) : (
          filteredRestaurant?.map((restaurant, index) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.card?.card?.info?.id}
                key={index}
              >
                <RestaurantCard {...restaurant} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default BodyComponent;
