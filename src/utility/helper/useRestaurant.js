import { useEffect, useState} from "react";
import { FETCH_RESTAURANT_URL } from '../../components/Constants';

const useRestaurant = (id) => {

    const [restaurantDetail, setRestaurantDetail] = useState(null);

    useEffect(()=> {
        getRestuarantmenuDetails();
    },[]);

    async function getRestuarantmenuDetails() {
        const data = await fetch( FETCH_RESTAURANT_URL);
        const json = await data.json();
        const cards = json?.data?.cards?.filter((data) => data?.card?.card?.info);
        const restaurant = cards?.filter((val) => val?.card?.card?.info?.id == id);
        setRestaurantDetail(restaurant[0]?.card?.card?.info);
      }
      return restaurantDetail;
}

export default useRestaurant;