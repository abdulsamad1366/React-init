import ResCard from "./ResCard";
import {useState , useEffect} from "react";
import ShimmerCard from "./Shimmer";

const Body = () => {
const [isLoading, setIsLoading] = useState(true);
const [allRestaurants, setAllRestaurants] = useState([]);
const [listofrestaurants , setlistofrestaurants ] = useState([]);
const [searchText , setSearchText] = useState("");

useEffect(() => {
  getRestaurants();
}, []);

const getRestaurants = async () => {
  setIsLoading(true);
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.49870&lng=77.66690&collection=80355&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  );
  const json = await data.json();
  const restaurantList = json?.data?.cards?.filter(
    (card) => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );
  setAllRestaurants(restaurantList ?? []);
  setlistofrestaurants(restaurantList ?? []);
  setIsLoading(false);
};  

const handleSearch = () => {
  const searchValue = searchText.trim().toLowerCase();

  if (!searchValue) {
    setlistofrestaurants(allRestaurants);
    return;
  }

  const filteredRestaurants = allRestaurants.filter((res) =>
    res?.card?.card?.info?.name?.toLowerCase().includes(searchValue)
  );

  setlistofrestaurants(filteredRestaurants);
};

  if (isLoading) {
    return <ShimmerCard />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="search-input"
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = allRestaurants.filter(
              (res) => res?.card?.card?.info?.avgRating > 4 
            );
            setlistofrestaurants(filteredList);
          }}
        >
          Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="rest-container">
        {listofrestaurants.length > 0 ? (
          listofrestaurants.map((restaurant) => (
            <ResCard key={restaurant.card.card.info.id} resData={restaurant} />
          ))
        ) : (
          <p>No restaurants found. Try a different search.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
