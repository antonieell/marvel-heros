export const SkeletonHeroCard = () => {
  return (
    <div className="w-full mx-auto grid max-w-screen-2xl gap-2 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 ">
      <div className="relative h-64 bg-gray-200 bg-center bg-no-repeat bg-cover delay-75 animate-pulse md:h-72" />
      <div className="relative h-64 bg-gray-200 bg-center bg-no-repeat bg-cover delay-100 animate-pulse md:h-72" />
      <div className="relative h-64 bg-gray-200 bg-center bg-no-repeat bg-cover delay-150 animate-pulse md:h-72" />
      <div className="relative h-64 bg-gray-200 bg-center bg-no-repeat bg-cover delay-300 animate-pulse md:h-72" />
    </div>
  );
};

