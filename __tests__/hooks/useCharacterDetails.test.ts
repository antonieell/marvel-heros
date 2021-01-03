import { useCharacterDetails } from "@/hooks/index";
import { setupHook } from "@/utils/index";
import { cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";

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
    let useHook: any;
    await act(async () => {
      useHook = setupHook(useCharacterDetails, items);
    });
    expect(useHook.results.length).not.toBe(0);
    expect(useHook.isLoading).toBe(false);
  });
});
