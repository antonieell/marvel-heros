import { CharactersList, Layout } from "components/index";
import Head from "next/head";

export default function CharactersListPage() {
  return (
    <Layout>
      <Head>
        <title>Marvel Heros</title>
      </Head>
      <CharactersList />
    </Layout>
  );
}


