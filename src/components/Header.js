import { LOGO_URL } from "../utils/constant";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  useEffect(() => {
    console.log("useEffect called in header"); 
  }, [btnNameReact]);
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-3.5 border border-border-soft rounded-2xl bg-white/70 backdrop-blur-md shadow-md sticky top-4 z-50 transition-all duration-300">
      <Link to="/" className="flex items-center gap-3 group">
        <img className="w-14 h-14 rounded-xl border-2 border-white shadow-md object-cover transition-all duration-300 group-hover:scale-105 group-hover:rotate-2" src={LOGO_URL} alt="BiteDash Logo" />
        <span className="font-sora font-extrabold text-2xl bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent tracking-tight">BiteDash</span>
      </Link>
      <div className="flex items-center">
        <ul className="flex flex-wrap items-center justify-center gap-1.5 md:gap-3 list-none font-sora font-semibold text-xs md:text-sm text-text-muted">
          <li className="px-3 py-1.5 rounded-full hover:bg-surface-soft hover:text-text-main transition-all duration-200 hover:-translate-y-0.5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 py-1.5 rounded-full hover:bg-surface-soft hover:text-text-main transition-all duration-200 hover:-translate-y-0.5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3 py-1.5 rounded-full hover:bg-surface-soft hover:text-text-main transition-all duration-200 hover:-translate-y-0.5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3 py-1.5 rounded-full hover:bg-surface-soft hover:text-text-main transition-all duration-200 hover:-translate-y-0.5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3 py-1.5 rounded-full hover:bg-surface-soft hover:text-text-main transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex items-center gap-1">
            <span>🛒</span> Cart
          </li>
          <button
            className="ml-2 px-4.5 py-1.5 rounded-full font-sora font-bold text-xs uppercase tracking-wider border border-brand/20 bg-gradient-to-b from-white to-surface-soft text-text-main shadow-sm hover:border-brand/40 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            onClick={() => {
              btnNameReact === "Logout" ? setbtnNameReact("Login") : setbtnNameReact("Logout");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
