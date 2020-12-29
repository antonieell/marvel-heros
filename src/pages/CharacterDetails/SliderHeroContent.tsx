import clsx from "clsx";
import { useEffect, useState } from "react";
import {getCollectioUri} from "../../api/comics.api";
import { comicsDataMocked } from "../../data/comics";
import { Comics } from "../../shared/types";
import { Result } from "../../shared/types/comics";

interface SliderHeroContentProps {
  comics: Comics | undefined;
}

export const SliderHeroContent: React.FC<SliderHeroContentProps> = ({
  comics,
}) => {
  const [results,setResults] = useState<Result[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    (async () => {
      if (comics) {
        const { data } = await getCollectioUri(comics.collectionURI);
        setResults(data.data.results);
      }
    })();
  }, [comics]);

  const scrollRight = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const scrollLeft = () => {
    setCurrentIndex(currentIndex - 1);
  };


  return (
    <section className="w-full">
      <Container>
        <Carrousel scrollRight={scrollRight} scrollLeft={scrollLeft}>
          {results.map((value, index) => (
            <Item value={value} indexItem={index} currentIndex={currentIndex} />
          ))}
        </Carrousel>
      </Container>
    </section>
  );
};

const Container: React.FC = ({ children }) => {
  return (
    <div className="w-full mx-auto bg-gray-900 h-96 max-w-screen-xl">
      {children}
    </div>
  );
};

interface CarrouselProps {
  scrollRight: () => void;
  scrollLeft: () => void;
}
const Carrousel: React.FC<CarrouselProps> = ({
  children,
  scrollRight,
  scrollLeft,
}) => {
  return (
    <div className="relative flex items-center w-full h-full overflow-x-hidden ">
      <button onClick={scrollRight} className="absolute right-0">
        Decrementa
      </button>
      {children}
      <button onClick={scrollLeft} className="absolute left-0">
        Incrementa
      </button>
    </div>
  );
};

interface ItemProps {
  value: Result;
  indexItem: number;
  currentIndex: number;
}
const Item: React.FC<ItemProps> = ({ value, indexItem, currentIndex }) => {
  return (
    <div
      key="indexItem"
      className={clsx(
        `flex-shrink-0 w-1/4 bg-gray-400 h-full transform scale-90`,
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

