import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { useSlider } from "./useSlider";

export const Carrousel: React.FC = ({ children }) => {
  const elements = React.Children.toArray(children);
  const { currentIndex, handleCarrousel } = useSlider(elements);
  return (
    <section className="w-full mx-auto h-96 max-w-screen-xl">
      <div className="relative flex items-center w-full h-full overflow-x-hidden ">
        <Arrow direction="left" handleCarrousel={handleCarrousel} />
        {elements.map((child, index) => (
          <div
            className={clsx(
              `relative flex-shrink-0 w-full rounded-xl md:w-1/4 bg-gray-400 h-full transform scale-90`,
              index < currentIndex && "hidden"
            )}
          >
            {child}
          </div>
        ))}
        <Arrow direction="right" handleCarrousel={handleCarrousel} />
      </div>
    </section>
  );
};

type Actions = "right" | "left";
interface ArrowProps {
  direction: Actions;
  handleCarrousel: (action: Actions) => void;
}

const Arrow: React.FC<ArrowProps> = ({ direction, handleCarrousel }) => {
  if (direction === "left") {
    return (
      <button
        aria-label="previous"
        onClick={() => handleCarrousel("left")}
        className="absolute left-0 z-20 w-10 h-10 bg-gray-900 rounded-full leading-10 bg-opacity-75"
      >
        <Image
          width={32}
          height={32}
          layout="responsive"
          src="/svg/arrowLeft.svg"
          alt="Arrow left"
          className="absolute inset-0 object-cover w-full"
        />
      </button>
    );
  }

  return (
    <button
      aria-label="next"
      onClick={() => handleCarrousel("right")}
      className="absolute right-0 z-20 w-10 h-10 bg-gray-900 rounded-full leading-10 bg-opacity-75"
    >
      <Image
        width={32}
        height={32}
        layout="responsive"
        src="/svg/arrowRight.svg"
        alt="Arrow Right"
        className="absolute inset-0 object-cover w-full"
      />
    </button>
  );
};
