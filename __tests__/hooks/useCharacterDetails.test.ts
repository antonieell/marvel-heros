import { useCharacterDetails, useResultsProps } from "@/hooks/index";
import { cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

jest.mock("../../api/comics.api", () => ({
  getCollectioUri: () => ({
    data: {
      data: {
        offset: 0,
        limit: 4,
        total: 4,
        count: 4,
        results: ["Resultado 1", "Resultado 2"],
      },
    },
  }),
}));

describe("useCharacterDetails hook", () => {
  afterEach(cleanup);

  const items = {
    comics: { collectionURI: "http:comics" },
    events: { collectionURI: "http:series" },
    series: { collectionURI: "http:storeis" },
  };

  it("Should fetch Heros details", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useCharacterDetails(items as useResultsProps)
    );
    await waitForNextUpdate();

    expect(result.current.results.length).not.toBe(0);
    expect(result.current.isLoading).toBeFalsy();
  });
});
