import ResCard from "./ResCard";
import resList from "../utils/mockData.js";


const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="rest-container">
                {resList.map((restaurant) => (
                    <ResCard
                        key={restaurant.card.card.info.id}
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    )
}

export default Body ;