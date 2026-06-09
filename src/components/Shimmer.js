const ShimmerCard = () => {
  return (
    <div className="body">
      <div className="rest-container">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-image" />
            <div className="shimmer-info">
              <div className="shimmer-line shimmer-line-title" />
              <div className="shimmer-line shimmer-line-text" />
              <div className="shimmer-line shimmer-line-text short" />
              <div className="shimmer-meta-row">
                <div className="shimmer-line shimmer-pill" />
                <div className="shimmer-line shimmer-pill" />
              </div>
              <div className="shimmer-line shimmer-line-cost" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerCard;