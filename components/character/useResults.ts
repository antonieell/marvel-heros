import { Comics, Events, Series } from "../../types";
import { getCollectioUri } from "../../api/comics.api";
import { useEffect, useState } from "react";
import { ResultComics} from "@/types/index";

interface useResultsProps {
  comics: Comics | undefined;
  series: Series | undefined;
  events: Events | undefined;
}

export const useResults = ({ comics, events, series }: useResultsProps) => {
  const [results, setResults] = useState<ResultComics[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Uma forma masi peformática de fazer essa rotina
    // só carregar mais imagens quando tiver próximo do final do carrousel
    (async () => {
      setIsLoading(true);
      if (comics) {
        const { data } = await getCollectioUri(comics.collectionURI);
        setResults(data.data.results);
      }
      if (events) {
        const { data } = await getCollectioUri(events.collectionURI);
        appendInState(data.data.results);
      }
      if (series) {
        const { data } = await getCollectioUri(series.collectionURI);
        appendInState(data.data.results);
      }
      setIsLoading(false);
    })();
  }, [comics, events, series]);

  const appendInState = (newResult:ResultComics[]) => {
    setResults((prev) => [...prev, ...newResult]);
  };

  return { results, isLoading };
};
