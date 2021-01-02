import { useEffect, useState } from "react";
import { getCharacters } from "@/api/index";
import { ResultCharacter } from "@/types/index";

export const useHeros = () => {
  const [dataHeros, setDataHeros] = useState<ResultCharacter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchData = async (offset = 0) => {
    const { data } = await getCharacters(offset);
    setDataHeros(data.data.results);
    setIsLoading(false);
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loadNextPage = async () => {
    const offset = dataHeros.length;
    const data = await fetchData(offset);
    const results = data.data.results;
    setDataHeros((prev) => [...prev, ...results]);
    if (data.data.offset + data.data.count >= data.data.total)
      return setHasNextPage(false);
  };

  return {
    dataHeros,
    isLoading,
    hasNextPage,
    loadNextPage,
  };
};
