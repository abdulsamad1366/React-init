import React from 'react'

const RestaurantMenu = () => {
  return (
    <div className="max-w-2xl mx-auto mt-4 p-6 bg-white/40 backdrop-blur-xs border border-border-soft rounded-3xl shadow-sm w-full">
      <div className="flex flex-col gap-2 pb-5 border-b border-slate-100">
        <h1 className="font-sora font-extrabold text-2xl md:text-3xl text-text-main">Spice Garden</h1>
        <p className="text-xs md:text-sm text-text-muted">North Indian, Chinese, Beverages</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="flex items-center gap-1 text-xs font-extrabold px-2.5 py-1 rounded-full text-pill-green-text bg-pill-green">⭐ 4.2</span>
          <span className="flex items-center gap-1 text-xs font-extrabold px-2.5 py-1 rounded-full text-pill-yellow-text bg-pill-yellow">🕒 25-30 mins</span>
          <span className="text-xs text-text-muted font-semibold ml-auto">₹300 for two</span>
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="font-sora font-bold text-base md:text-lg text-text-main mb-4 flex items-center gap-2">
          <span>🍽️</span> Recommended Menu
        </h2>
        <ul className="flex flex-col gap-3">
          {[
            { name: "Double Cheese Margherita Pizza", price: "₹249", desc: "Classic delight with extra mozzarella cheese" },
            { name: "Spicy Paneer Burger", price: "₹129", desc: "Crispy paneer patty with spicy schezwan sauce" },
            { name: "Penne Alfredo Pasta", price: "₹189", desc: "Creamy white sauce pasta loaded with bell peppers" },
            { name: "Fresh Garden Salad", price: "₹99", desc: "Crisp lettuce, cucumber, tomato, and lime dressing" },
          ].map((item, index) => (
            <li key={index} className="flex justify-between items-start p-4 bg-white border border-slate-100/60 rounded-2xl hover:shadow-md transition-all">
              <div className="flex flex-col gap-1 pr-4">
                <span className="font-sora font-bold text-sm text-text-main">{item.name}</span>
                <span className="text-xs text-brand font-extrabold">{item.price}</span>
                <span className="text-xs text-text-muted leading-relaxed mt-0.5">{item.desc}</span>
              </div>
              <button className="px-4.5 py-1.5 text-xs font-sora font-extrabold text-brand bg-white border border-brand/20 rounded-xl hover:bg-brand hover:text-white hover:border-brand shadow-xs transition-all duration-200 cursor-pointer self-center whitespace-nowrap">
                ADD
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RestaurantMenu