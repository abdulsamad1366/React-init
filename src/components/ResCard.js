import { CDN_URL } from "../utils/constant.js";

const ResCard = (dets) => {
    const { resData } = dets;

    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.card.card.info;
    const deliveryTime = resData?.card?.card?.info?.sla?.slaString;

    return (
        <div className="res-card">
            <div className="res-logo-container">
                <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt={name} />
            </div>
            <div className="res-info">
                <h3 className="res-name">{name}</h3>
                <p className="res-cuisines">{cuisines.join(", ")}</p>
                <div className="res-meta-row">
                    <span className="res-rating">⭐ {avgRating}</span>
                    <span className="res-time">🕐 {deliveryTime}</span>
                </div>
                <p className="res-cost">{costForTwo}</p>
            </div>
        </div>
    );
};

export default ResCard ;