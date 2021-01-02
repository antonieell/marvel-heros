import { CharactersList, Layout } from "components/index";
import Head from "next/head";
import { ResultCharacter } from "../types";

interface CharactersListProps {
  initialCharacters?: ResultCharacter[];
}
export default function CharactersListPage({
  initialCharacters,
}: CharactersListProps) {
  return (
    <Layout>
      <Head>
        <title>Marvel Heros</title>
      </Head>
      <CharactersList  />
    </Layout>
  );
}


