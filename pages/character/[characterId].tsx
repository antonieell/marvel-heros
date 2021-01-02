import { HeroDetails, SliderHeroContent, Layout } from "components/index";
import { useCharacterList } from "@/hooks/index";
import Head from "next/head";
import { useRouter } from "next/router";

function CharacterDetails() {
  const router = useRouter();
  const { characterId } = router.query;
  const { heroData } = useCharacterList(characterId as string);

  return (
    <Layout>
      <Head>
        <title>Marvel Heros</title>
      </Head>
      <main className="flex flex-col justify-center w-full px-12 py-6 mx-auto gap-8 md:gap-16">
        <HeroDetails characterDetails={heroData} />
        <SliderHeroContent
          series={heroData?.series}
          events={heroData?.events}
          comics={heroData?.comics}
        />
      </main>
    </Layout>
  );
}

export default CharacterDetails;
