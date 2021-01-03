import { useEffect, useState } from "react";
import { getCharacterById } from "@/api/index";
import { ResultCharacter } from "@/types/index";

export const useCharacterPick = (characterId:string) => {

  const [error, setError] = useState<boolean>(false);
  const [heroData, setHeroData] = useState<ResultCharacter>();

  useEffect(() => {
    if (!characterId) {
      setError(true)
      return;
    }

    (async () => {
      //TODO: Capturar erros
      const { data } = await getCharacterById(characterId as string);
      setHeroData(data.data.results[0]);
    })();
  }, [characterId]);

  return{heroData, error}
}                                                     
