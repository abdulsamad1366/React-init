import { CDN_URL } from "../utils/constant.js";

const ResCard = (dets) => {
    const { resData } = dets;

    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.card.card.info;
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData?.card.card.info.sla.slaString}</h4>
        </div>
    )
}

export default ResCard ;