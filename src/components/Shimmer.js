const ShimmerCard = () => {
  return (
    <div className="body">
      <div className="rest-container">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-image" />
            <div className="shimmer-line shimmer-line-title" />
            <div className="shimmer-line shimmer-line-text" />
            <div className="shimmer-line shimmer-line-text short" />
            <div className="shimmer-line shimmer-line-meta" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerCard;