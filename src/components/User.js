import React from "react";
const User = ({ name, location }) => {  
    return (
        <div className="flex flex-col items-center p-5 bg-gradient-to-b from-white to-[#fffcf9] border border-[#f0f0f7] rounded-2xl w-full max-w-xs shadow-xs hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand to-[#ff8d47] flex items-center justify-center text-white text-xl font-bold font-sora shadow-sm mb-3">
                {name ? name.charAt(0) : "U"}
            </div>
            <h2 className="font-sora font-bold text-sm text-text-main uppercase tracking-wider">Creator Profile</h2>
            <p className="text-sm font-bold text-brand mt-1">{name}</p>
            <p className="text-xs text-text-muted mt-0.5">📍 {location}</p>
        </div>
    );
};
export default User;