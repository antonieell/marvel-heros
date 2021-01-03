import { useEffect, useState } from "react";
import { getCharacterById } from "@/api/index";
import { ResultCharacter } from "@/types/index";

export const useCharacterPick = (characterId: string | any) => {
  const [error, setError] = useState<boolean>(false);
  const [heroData, setHeroData] = useState<ResultCharacter>();

  if (!characterId) {
    throw Error("characterId should be provided");
  }

  if (isNaN(characterId)) {
    throw Error("invalid CharacterId");
  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getCharacterById(characterId as string);
        setHeroData(data.data.results[0]);
      } catch (error) {
        setError(true);
      }
    })();
  }, [characterId]);

  return { heroData, error };
};                                                     
