import { CDN_URL } from "../utils/constant.js";

export const ResCard = (dets) => {
    const { resData } = dets;

    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.card.card.info;
    const deliveryTime = resData?.card?.card?.info?.sla?.slaString;

    return (
        <div className="group flex flex-col justify-between p-3 border border-[#f0f0f7] rounded-3xl bg-gradient-to-b from-white to-[#fffefc] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden">
            <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-slate-100">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={CDN_URL + cloudinaryImageId} alt={name} />
            </div>
            <div className="flex flex-col gap-1.5 p-1 mt-2.5">
                <h3 className="font-sora font-extrabold text-sm md:text-base text-text-main line-clamp-1 group-hover:text-brand transition-colors duration-200">{name}</h3>
                <p className="text-xs text-text-muted line-clamp-2 min-h-[32px] leading-relaxed">{cuisines.join(", ")}</p>
                <div className="flex items-center gap-2 mt-1">
                    <span className="flex items-center gap-1 text-[10px] md:text-xs font-extrabold px-2.5 py-1 rounded-full text-pill-green-text bg-pill-green">
                        ⭐ {avgRating}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] md:text-xs font-extrabold px-2.5 py-1 rounded-full text-pill-yellow-text bg-pill-yellow">
                        🕒 {deliveryTime}
                    </span>
                </div>
                <p className="font-sora font-bold text-xs md:text-sm text-slate-800 mt-1">{costForTwo}</p>
            </div>
        </div>
    );
};

export const withPromotedlabel = (ResCard) => {
    return (props) => {
        return (
            <div className="relative">
                <span className="absolute top-6 left-6 bg-slate-900/90 text-white text-[9px] font-extrabold px-2 py-0.5 rounded shadow-sm z-10 tracking-wider uppercase">Promoted</span>
                <ResCard {...props} />
            </div>
        );
    };
};
  