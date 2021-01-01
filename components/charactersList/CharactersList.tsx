import { useEffect, useState } from "react";
import { getCharacters } from "../../api";
import Link from "next/link";
import { Layout } from "../layout";
import { Result } from "../../types/";
import { SkeletonHeroCard } from "./Skeleton";

export function CharactersList() {
  const [dataHeros, setDataHeros] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await getCharacters();
      setDataHeros(data.data.results);
      setIsLoading(false);
    })();
  }, []);

  const loadNextPage = async () => {
    const offset = dataHeros.length;
    const { data } = await getCharacters(offset);
    const results = data.data.results;
    setDataHeros((prev) => [...prev, ...results]);
    if (data.data.offset + data.data.count >= data.data.total)
      return setHasNextPage(false);
  };
  return (
    <Layout>
      {isLoading && <SkeletonHeroCard />}
      <div className="mx-auto max-w-screen-2xl wrapper md:gap-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 auto-rows-auto">
        {dataHeros.map((value) => (
          <HeroCard value={value} />
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
    </Layout>
  );
}

interface HeroCardProps {
  value: Result;
}

const HeroCard: React.FC<HeroCardProps> = ({ value }) => {
  return (
    <Link href={{ pathname: `/character/${value.id}` }} key={value.id}>
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
