import clsx from "clsx";
import { useEffect, useState } from "react";
import { Comics } from "../../shared/types";
import { Result } from "../../shared/types/comics";
import { useResults } from "./useResults";

interface SliderHeroContentProps {
  comics: Comics | undefined;
}
interface CarrouselProps {
  handleCarrousel: (action: "right" | "left") => void;
}
interface ItemProps {
  value: Result;
  indexItem: number;
  currentIndex: number;
}

export const SliderHeroContent: React.FC<SliderHeroContentProps> = ({
  comics,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { results } = useResults({ comics });

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
        {results.map((value, index) => (
          <Item value={value} indexItem={index} currentIndex={currentIndex} />
        ))}
      </Carrousel>
    </section>
  );
};

const Carrousel: React.FC<CarrouselProps> = ({ children, handleCarrousel }) => {
  return (
    <div className="w-full mx-auto bg-gray-900 h-96 max-w-screen-xl">
      <div className="relative flex items-center w-full h-full overflow-x-hidden ">
        <button
          onClick={() => handleCarrousel("right")}
          className="absolute right-0"
        >
          Decrementa
        </button>
        {children}
        <button
          onClick={() => handleCarrousel("left")}
          className="absolute left-0"
        >
          Incrementa
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
        `flex-shrink-0 w-full md:w-1/4 bg-gray-400 h-full transform scale-90`,
        indexItem < currentIndex && "hidden"
      )}
    >
      <img
        className="w-full h-full bg-cover rounded-xl"
        src={`${value.thumbnail.path}/standard_fantastic.${value?.thumbnail?.extension}`}
        alt={value.title}
      />
    </div>
  );
};
