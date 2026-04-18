import ResCard from "./ResCard";
import {useState , useEffect} from "react";
import ShimmerCard from "./Shimmer";

const Body = () => {
const [listofrestaurants , setlistofrestaurants ] = useState([]);
useEffect(() => {
  getRestaurants();
}, []);

const getRestaurants = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.49870&lng=77.66690&collection=80355&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  );
  const json = await data.json();
  const restaurantList = json?.data?.cards?.filter(
    (card) => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );
  setlistofrestaurants(restaurantList ?? []);
};  


  return listofrestaurants.length === 0 ?  <ShimmerCard /> :(
    <div className="body">
      <div className="filter">
        <div className="search-box">
          <input  
            onClick={() => {
              //filter the card and update the UI
            }}
            type="text"
            placeholder="Search for restaurants..."
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofrestaurants.filter(
              (res) => res.card.card.info.avgRating > 4 
            );
            setlistofrestaurants(filteredList);
          }}
        >
          Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="rest-container">
        {listofrestaurants.map((restaurant) => (
          <ResCard key={restaurant.card.card.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
