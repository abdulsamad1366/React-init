import ResCard from "./ResCard";
import {useState , useEffect} from "react";
import ShimmerCard from "./Shimmer";
import useOnlineStatus from "../utils/useOnlinestatus";

const Body = () => {
const [isLoading, setIsLoading] = useState(true);
const [allRestaurants, setAllRestaurants] = useState([]);
const [listofrestaurants , setlistofrestaurants ] = useState([]);
const [searchText , setSearchText] = useState("");
const onlineStatus = useOnlineStatus();

useEffect(() => {
  getRestaurants();
}, []);

const getRestaurants = async () => {
  setIsLoading(true);
  try {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.49870&lng=77.66690&collection=80355&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);

    const json = await res.json();
    const restaurantList = json?.data?.cards?.filter(
      (card) => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
    setAllRestaurants(restaurantList ?? []);
    setlistofrestaurants(restaurantList ?? []);
  } catch (err) {
    console.error("Failed to fetch restaurants:", err);
    // Fallback: empty list so the UI doesn't crash. Optionally add mock data here.
    setAllRestaurants([]);
    setlistofrestaurants([]);
  } finally {
    setIsLoading(false);
  }
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

  if (onlineStatus === false) {
    return <h1>Looks like you are offline!! Please check your internet connection</h1>;
  }

  if (isLoading) {
    return <ShimmerCard />;
  }

  return (
    <div className="flex flex-col gap-6 mt-2">
      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-border-soft rounded-2xl bg-white/40 backdrop-blur-xs">
        <div className="flex items-center gap-2 p-1 bg-white border border-slate-100 rounded-xl shadow-sm focus-within:border-brand/40 focus-within:ring-3 focus-within:ring-brand/10 transition-all duration-200 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="flex-1 md:w-72 px-3.5 py-2 text-sm text-text-main placeholder-slate-400 bg-transparent border-0 outline-none"
          />
          <button 
            className="px-4.5 py-2 text-xs md:text-sm font-sora font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all active:scale-95 cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="px-5 py-2.5 text-xs md:text-sm font-sora font-bold text-white bg-gradient-to-r from-brand to-[#ff8d47] rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-1.5 self-stretch md:self-auto"
          onClick={() => {
            const filteredList = allRestaurants.filter(
              (res) => res?.card?.card?.info?.avgRating > 4 
            );
            setlistofrestaurants(filteredList);
          }}
        >
          ✨ Top Rated Restaurants
        </button>
      </div>

      {/* Restaurants List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listofrestaurants.length > 0 ? (
          listofrestaurants.map((restaurant) => (
            <ResCard key={restaurant.card.card.info.id} resData={restaurant} />
          ))
        ) : (
          <div className="col-span-full text-center py-16 px-4 bg-white/40 border border-border-soft rounded-2xl">
            <p className="text-text-muted font-sora text-base md:text-lg font-medium">No restaurants found. Try a different search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
