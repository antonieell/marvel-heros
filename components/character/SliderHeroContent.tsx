import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { Comics, ResultComics, Events, Series } from "../../types/";
import { SkeletonItem } from "./Skeleton";
import { useResults } from "./useResults";

interface SliderHeroContentProps {
  comics: Comics | undefined;
  series: Series | undefined;
  events: Events | undefined;
}
interface CarrouselProps {
  handleCarrousel: (action: "right" | "left") => void;
}
interface ItemProps {
  value: ResultComics;
  indexItem: number;
  currentIndex: number;
}

export const SliderHeroContent: React.FC<SliderHeroContentProps> = ({
  comics,
  series,
  events,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { results, isLoading } = useResults({ comics, events, series });

  const handleCarrousel = (action: "right" | "left") => {
    if (results.length <= 4) return;
    if (action === "left") {
      return currentIndex === 0 ? false : setCurrentIndex(currentIndex - 1);
    }
    if (action === "right") {
      return currentIndex + 4 === results.length
        ? false
        : setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="w-full">
      <Carrousel handleCarrousel={handleCarrousel}>
        {isLoading && <SkeletonItem />}
        {!isLoading &&
          results.map((value, index) => (
            <Item value={value} indexItem={index} currentIndex={currentIndex} />
          ))}
      </Carrousel>
    </section>
  );
};

const Carrousel: React.FC<CarrouselProps> = ({ children, handleCarrousel }) => {
  return (
    <div className="w-full mx-auto h-96 max-w-screen-xl">
      <div className="relative flex items-center w-full h-full overflow-x-hidden ">
        <button
          onClick={() => handleCarrousel("left")}
          className="absolute left-0 z-20 w-10 h-10 bg-gray-900 rounded-full leading-10 bg-opacity-75"
        >
          <Image
            width={32}
            height={32}
            layout="responsive"
            src="/svg/arrowLeft.svg"
            alt="Arrow Right"
            className="absolute inset-0 object-cover w-full"
          />
        </button>
        {children}
        <button
          onClick={() => handleCarrousel("right")}
          className="absolute right-0 z-20 w-10 h-10 bg-gray-900 rounded-full leading-10 bg-opacity-75"
        >
          <Image
            width={32}
            height={32}
            layout="responsive"
            src="/svg/arrowRight.svg"
            alt="Arrow Left"
            className="absolute inset-0 object-cover w-full"
          />
        </button>
      </div>
    </div>
  );
};

const Item: React.FC<ItemProps> = ({ value, indexItem, currentIndex }) => {
  return (
    <div
      key="indexItem"
      className={clsx(
        `relative flex-shrink-0 w-full rounded-xl md:w-1/4 bg-gray-400 h-full transform scale-90`,
        indexItem < currentIndex && "hidden"
      )}
    >
      <Image
        layout="fill"
        className="w-full h-full bg-cover rounded-xl"
        src={`${value.thumbnail.path}/standard_fantastic.${value?.thumbnail?.extension}`}
        alt={value.title}
      />
    </div>
  );
};
