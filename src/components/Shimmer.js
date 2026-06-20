const ShimmerCard = () => {
  return (
    <div className="flex flex-col gap-6 mt-2">
      {/* Shimmer Search and Filters Mock */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-border-soft rounded-2xl bg-white/40 animate-pulse">
        <div className="h-10 w-full md:w-80 rounded-xl bg-slate-200/60" />
        <div className="h-10 w-full md:w-48 rounded-xl bg-slate-200/60" />
      </div>

      {/* Shimmer Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="flex flex-col justify-between p-3 border border-[#f0f0f7] rounded-3xl bg-white shadow-sm overflow-hidden animate-pulse" key={index}>
            <div className="w-full h-40 rounded-2xl bg-slate-200" />
            <div className="flex flex-col gap-2 p-1 mt-3">
              <div className="h-4.5 w-3/4 rounded-md bg-slate-200" />
              <div className="flex flex-col gap-1.5 mt-1">
                <div className="h-3 w-full rounded-md bg-slate-200" />
                <div className="h-3 w-5/6 rounded-md bg-slate-200" />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-6 w-14 rounded-full bg-slate-200" />
                <div className="h-6 w-16 rounded-full bg-slate-200" />
              </div>
              <div className="h-4 w-1/3 rounded-md bg-slate-200 mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerCard;