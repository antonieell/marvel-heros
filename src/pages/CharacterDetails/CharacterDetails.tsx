import { useEffect, useMemo, useState } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import { getCharacterById } from "../../api";
import { Layout } from "../../layout";
import { Result } from "../../shared/types";
import { SliderHeroContent } from "./SliderHeroContent";

export const CharacterDetails = () => {
  const [heroData, setHeroData] = useState<Result>();

  const { params } = useRouteMatch<{ characterId: string }>();
  const { state } = useLocation<Result>();

  useMemo(() => setHeroData(state), [state]);

  useEffect(() => {
    if (heroData) {
      return;
    }
    (async () => {
      console.log("fetch from api");
      const id = parseInt(params.characterId);
      //TODO: Capturar erros
      const { data } = await getCharacterById(id);
      setHeroData(data.data.results[0]);
    })();
  }, [heroData, params.characterId]);

  return (
    <Layout>
      <Container>
        <HeroDetails value={heroData} />
        <SliderHeroContent
          series={heroData?.series}
          events={heroData?.events}
          comics={heroData?.comics}
        />
      </Container>
    </Layout>
  );
};

const Container: React.FC = ({ children }) => {
  return (
    <main className="flex flex-col justify-center w-full px-12 py-6 mx-auto gap-8 md:gap-16">
      {children}
    </main>
  );
};

interface HeroDetailsProps {
  value: Result | undefined;
}

const HeroDetails: React.FC<HeroDetailsProps> = ({ value }) => {
  if (!value) {
    //TODO: FAZER SKELETONS
    return <div>Aguarde um instante</div>;
  }
  return (
    <section className="flex flex-col items-center justify-center md:flex-row gap-12 md:gap-16">
      <div className="w-full bg-gray-300 bg-no-repeat bg-cover md:w-80 md:h-80 rounded-xl ">
        <img
          className="object-cover object-center w-full h-full rounded-xl"
          src={`${value?.thumbnail?.path}/standard_fantastic.${value?.thumbnail?.extension}`}
          alt={`${value.name}`}
        />
      </div>
      <article className="self-start">
        <h3 className="font-extrabold text-red-600">Name</h3>
        <p>{value.name}</p>
        <h3 className="font-extrabold text-red-600">Description</h3>
        <p className="max-w-lg">
          {value.description ? value.description : "Description does not exist"}
        </p>
      </article>
    </section>
  );
};

