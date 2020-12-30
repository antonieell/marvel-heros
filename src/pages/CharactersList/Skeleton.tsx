export const SkeletonHeroCard = () => {
  return (
    <>
      <div className="relative h-64 bg-gray-200 bg-center bg-no-repeat bg-cover delay-75 animate-pulse md:h-72" />
      <div className="relative h-64 bg-gray-200 bg-center bg-no-repeat bg-cover delay-100 animate-pulse md:h-72" />
      <div className="relative h-64 bg-gray-200 bg-center bg-no-repeat bg-cover delay-150 animate-pulse md:h-72" />
      <div className="relative h-64 bg-gray-200 bg-center bg-no-repeat bg-cover delay-300 animate-pulse md:h-72" />
    </>
  );
};

