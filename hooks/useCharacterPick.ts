import { useEffect, useState } from "react";
import { getCharacterById } from "@/api/index";
import { ResultCharacter } from "@/types/index";

export const useCharacterPick = (characterId: string  ) => {
  const [error, setError] = useState<boolean>(false);
  const [heroData, setHeroData] = useState<ResultCharacter>();

  useEffect(() => {
    if (!characterId) {
      setError(true);
    }

    if (isNaN(characterId as any)) {
      setError(true);
    }
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
