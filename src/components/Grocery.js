
const Grocery = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center p-8 md:p-16 max-w-xl mx-auto bg-white/40 backdrop-blur-xs border border-border-soft rounded-3xl mt-4 shadow-sm w-full">
            <span className="text-5xl md:text-6xl mb-4 animate-bounce">🛒</span>
            <h1 className="font-sora font-extrabold text-2xl md:text-3xl text-text-main">BiteDash Grocery Store</h1>
            <p className="text-text-muted text-xs md:text-sm mt-3 leading-relaxed max-w-md">
                Our superfast grocery delivery service is launching soon! Get fresh produce, dairy, and household essentials delivered in minutes.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-2.5 w-full max-w-sm">
                <input type="email" placeholder="Email for early access" className="flex-grow px-4 py-2.5 text-sm rounded-xl border border-slate-150 bg-white focus:border-brand/40 focus:ring-3 focus:ring-brand/10 transition-all outline-none" />
                <button className="px-5 py-2.5 text-xs md:text-sm font-sora font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all active:scale-95 cursor-pointer whitespace-nowrap">Notify Me</button>
            </div>
        </div>
    )
}

export default Grocery;