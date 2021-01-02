export const SkeletonItem = () => {
  return (
    <section className="flex w-full mx-auto h-96 max-w-screen-xl">
      <div
        className={`flex-shrink-0 w-full rounded-xl md:w-1/4 bg-gray-200 animate-pulse h-full transform scale-90`}
      />
      <div
        className={`flex-shrink-0 w-full rounded-xl md:w-1/4 bg-gray-200 animate-pulse h-full transform scale-90`}
      />
      <div
        className={`flex-shrink-0 w-full rounded-xl md:w-1/4 bg-gray-200 animate-pulse h-full transform scale-90`}
      />
      <div
        className={`flex-shrink-0 rounded-xl w-full md:w-1/4 bg-gray-200 animate-pulse h-full transform scale-90`}
      />
    </section>
  );
};

export const SkeletonCharacterImage = () => {
  return (
    <>
      <div
        className={`w-full bg-gray-300 mx-auto bg-no-repeat bg-cover md:w-80 md:h-80 rounded-xl `}
      />
    </>
  );
};

export default SkeletonItem;
