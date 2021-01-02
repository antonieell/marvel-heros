import { useCharacterDetails } from "@/hooks/useCharacterDetails";
import Image from "next/image";
import React, { useState } from "react";
import { Comics, ResultComics, Events, Series } from "../../types/";
import { Carrousel } from "@/components/index";
import { SkeletonItem } from "./Skeleton";

interface SliderHeroContentProps {
  comics: Comics | undefined;
  series: Series | undefined;
  events: Events | undefined;
}
export const SliderHeroContent: React.FC<SliderHeroContentProps> = (props) => {
  const { results , isLoading} = useCharacterDetails(props);
  if (isLoading) {
    return <SkeletonItem />;
  }

  return (
    <Carrousel>
      {results.map((value) => (
        <Item key={value.id} value={value} />
      ))}
    </Carrousel>
  );
};

interface ItemProps {
  value: ResultComics;
}

const Item: React.FC<ItemProps> = ({ value }) => {
  return (
    <Image
      layout="fill"
      className="w-full h-full bg-cover rounded-xl"
      src={`${value.thumbnail.path}/standard_fantastic.${value?.thumbnail?.extension}`}
      alt={value.title}
    />
  );
};

