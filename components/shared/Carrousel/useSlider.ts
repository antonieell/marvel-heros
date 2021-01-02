import { useState } from "react";


export const useSlider = (childrens : any[]) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCarrousel = (action: "right" | "left") => {
    if (childrens.length <= 4) return;
    if (action === "left") {
      return currentIndex === 0 ? false : setCurrentIndex(currentIndex - 1);
    }
    if (action === "right") {
      return currentIndex + 4 === childrens.length
        ? false
        : setCurrentIndex(currentIndex + 1);
    }
  };

  return {currentIndex, handleCarrousel, isLoading, setIsLoading };
};
