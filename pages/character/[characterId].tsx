import { CharacterDetails , Layout} from "@/components/index";
import Head from "next/head";

export default function CharacterDetailsPage(){
  return(
    <Layout>
      <Head>
        <title>Marvel Heros</title>
      </Head>
      <CharacterDetails/>
    </Layout>
  )
}
