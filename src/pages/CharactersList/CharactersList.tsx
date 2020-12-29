import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../../api";
import { Layout } from "../../layout";
import { Result } from "../../shared/types";

export const CharactersList = () => {
  const [dataHeros, setDataHeros] = useState<Result[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getCharacters();
      setDataHeros(data.data.results);
    })();
  }, []);
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl wrapper md:gap-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 auto-rows-auto">
        {dataHeros.map((value) => (
          <HeroCard value={value} />
        ))}
      </div>
    </Layout>
  );
};

interface HeroCardProps {
  value: Result;
}

const HeroCard: React.FC<HeroCardProps> = ({ value }) => {
  return (
    <Link
      to={{ pathname: `/character/${value.id}`, state: value }}
      className="relative h-64 bg-gray-900 bg-center bg-no-repeat bg-cover md:h-72"
      style={{
        backgroundImage: `url(${value.thumbnail.path}/landscape_incredible.${value.thumbnail.extension})`,
      }}
      key={value.id}
    >
      <span
        style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
        className="absolute w-56 px-2 py-1 text-center text-black left-4 bg-gray-50 bottom-8"
      >
        {value.name}
      </span>
    </Link>
  );
};
