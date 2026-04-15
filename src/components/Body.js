import ResCard from "./ResCard";
import {useState} from "react";
import resList from "../utils/mockData.js";

const Body = () => {
const [listofrestaurants , setlistofrestaurants ] = useState([
      {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "104420",
            name: "KFC",
            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/3/01de0904-8d45-48ad-8060-3e933c3f26c1_104421.JPG",
            locality: "Dampier Nagar",
            areaName: "Shankar Vihar",
            costForTwo: "₹400 for two",
            cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
            avgRating: 5,
            parentId: "2456",
            avgRatingString: "4.6 ",
            totalRatingsString: "2.3K+",
            promoted: true,
            adTrackingId:
              "cid=dced4c22-dcf8-44f1-b13f-d6afe92bb7c3~p=0~adgrpid=dced4c22-dcf8-44f1-b13f-d6afe92bb7c3#ag129~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=104421~plpr=COLLECTION~eid=1bb5635a-bb3c-4c01-b80e-214922158e30~srvts=1772730509221~collid=83631",
            sla: {
              deliveryTime: 25,
              lastMileTravel: 2,
              serviceability: "SERVICEABLE",
              slaString: "20-25 mins",
              lastMileTravelString: "2.0 km",
              iconType: "ICON_TYPE_EMPTY",
            },
          },
        },
      },
    }, 
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "104421",
            name: "Domino's Pizza",
            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/3/01de0904-8d45-48ad-8060-3e933c3f26c1_104421.JPG",
            locality: "Dampier Nagar",
            areaName: "Shankar Vihar",
            costForTwo: "₹400 for two",
            cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
            avgRating: 4.6,
            parentId: "2456",
            avgRatingString: "4.6 ",
            totalRatingsString: "2.3K+",
            promoted: true,
            adTrackingId:
              "cid=dced4c22-dcf8-44f1-b13f-d6afe92bb7c3~p=0~adgrpid=dced4c22-dcf8-44f1-b13f-d6afe92bb7c3#ag129~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=104421~plpr=COLLECTION~eid=1bb5635a-bb3c-4c01-b80e-214922158e30~srvts=1772730509221~collid=83631",
            sla: {
              deliveryTime: 25,
              lastMileTravel: 2,
              serviceability: "SERVICEABLE",
              slaString: "20-25 mins",
              lastMileTravelString: "2.0 km",
              iconType: "ICON_TYPE_EMPTY",
            },
          },
        },
      },
    },
]);


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofrestaurants.filter(
              (res) => res.card.card.info.avgRating > 4.7
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
