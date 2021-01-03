import Link from "next/link";
import { ResultCharacter } from "@/types/index";
import { SkeletonHeroCard } from "./Skeleton";
import { useHeros } from "@/hooks/index";

export const CharactersList: React.FC = () => {
  const { dataHeros, isLoading, hasNextPage, loadNextPage } = useHeros();
  return (
    <>
      {isLoading && <SkeletonHeroCard />}
      <div className="mx-auto max-w-screen-2xl wrapper md:gap-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 auto-rows-auto">
        {dataHeros.map((value) => (
          <HeroCard value={value} key={value.id} />
        ))}
      </div>

      {hasNextPage && (
        <div className="flex items-center justify-center w-full pb-8 mt-4">
          <button
            onClick={() => loadNextPage()}
            className="px-4 py-2 mx-auto font-extrabold text-white bg-red-700"
          >
            Carregar Mais
          </button>
        </div>
      )}
    </>
  );
};

interface HeroCardProps {
  value: ResultCharacter;
}

const HeroCard: React.FC<HeroCardProps> = ({ value }) => {
  return (
    <Link href={{ pathname: `/character/${value.id}` }}>
      <a
        href={`/character/${value.id}`}
        style={{
          backgroundImage: `url(${value.thumbnail.path}/landscape_incredible.${value.thumbnail.extension})`,
        }}
        className="relative h-64 bg-gray-900 bg-center bg-no-repeat bg-cover md:h-72"
      >
        <span
          style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
          className="absolute w-56 px-2 py-1 text-center text-black left-4 bg-gray-50 bottom-8"
        >
          {value.name}
        </span>
      </a>
    </Link>
  );
};
