import { Comics } from "../../shared/types";
import { getCollectioUri } from "../../api/comics.api";
import { useEffect, useState } from "react";
import { Result } from "../../shared/types/comics";

interface useResultsProps {
  comics: Comics | undefined;
}

export const useResults = ({ comics }: useResultsProps) => {
  const [results, setResults] = useState<Result[]>([]);
  useEffect(() => {
    (async () => {
      if (comics) {
        const { data } = await getCollectioUri(comics.collectionURI);
        setResults(data.data.results);
      }
    })();
  }, [comics]);

  return { results };
};
