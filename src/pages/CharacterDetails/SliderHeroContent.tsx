import clsx from "clsx";
import { useState } from "react";

const fakeArray = [0, 1, 2, 3, 4];
export const SliderHeroContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
          {fakeArray.map((v, i) => (
            <Item indexItem={i} currentIndex={currentIndex} />
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
  indexItem: number;
  currentIndex: number;
}
const Item: React.FC<ItemProps> = ({ indexItem, currentIndex }) => {
  return (
    <div
      className={clsx(
        `flex-shrink-0 w-1/4 bg-gray-400 h-full transform scale-90`,
        indexItem < currentIndex && "hidden"
      )}
    >
      O índex desse ítem é: {indexItem}
      <br />O index atual é : {currentIndex}
    </div>
  );
};

