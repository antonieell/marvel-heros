import { useEffect, useState } from "react";
import { getCharacterById } from "@/api/index";
import { ResultCharacter } from "@/types/index";

export const useCharacterList = (characterId:string) => {

  const [heroData, setHeroData] = useState<ResultCharacter>();

  useEffect(() => {
    if (!characterId) {
      return;
    }
    (async () => {
      console.log("fetch from api");
      //TODO: Capturar erros
      const { data } = await getCharacterById(characterId as string);
      setHeroData(data.data.results[0]);
    })();
  }, [characterId]);

  return{heroData}
}                                                     
