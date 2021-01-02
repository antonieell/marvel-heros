import { ResultCharacter } from "@/types/index";
import Image from "next/image";
import { SkeletonCharacterImage } from "./Skeleton";

interface HeroDetailsProps {
  characterDetails?: ResultCharacter;
}

export const HeroDetails: React.FC<HeroDetailsProps> = ({
  characterDetails,
}) => {
  if (!characterDetails) {
    return <SkeletonCharacterImage />;
  }
  return (
    <section className="flex flex-col items-center justify-center rounded-xl md:flex-row gap-12 md:gap-16">
      <div className="w-full bg-gray-300 bg-no-repeat bg-cover md:w-80 md:h-80 rounded-xl ">
        <Image
          width={250}
          height={250}
          layout="responsive"
          className="object-cover object-center w-full h-full rounded-xl"
          src={`${characterDetails?.thumbnail?.path}/standard_fantastic.${characterDetails?.thumbnail?.extension}`}
          alt={`${characterDetails.name}`}
        />
      </div>
      <article className="self-start md:self-center">
        <h3 className="font-extrabold text-red-600">Name</h3>
        <p>{characterDetails.name}</p>
        <h3 className="font-extrabold text-red-600">Description</h3>
        <p className="max-w-lg">
          {characterDetails.description
            ? characterDetails.description
            : "Description does not exist"}
        </p>
      </article>
    </section>
  );
};

