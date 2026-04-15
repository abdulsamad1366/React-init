import ResCard from "./ResCard";
import {useState} from "react";
import resList from "../utils/mockData.js";

const Body = () => {
const [listofrestaurants , setlistofrestaurants ] = useState(resList);


  return (
    <div className="body">
      <div className="filter">
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
