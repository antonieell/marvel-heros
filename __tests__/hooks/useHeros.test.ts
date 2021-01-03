import { useHeros } from "@/hooks/index";
import { setupHook } from "@/utils/index";
import { cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";

jest.mock("../../api/characters.api", () => ({
  getCharacters: () => ({
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

describe("useHeros hook", () => {
  let useHook: any;

  afterEach(cleanup);
  beforeEach(async () => {
    await act(async () => {
      useHook = setupHook(useHeros);
    });
  });

  it("Should fetch Heros data", async () => {
    expect(useHook.dataHeros.length).toBe(2);
  });

  it("Should load more data", async () => {
    await act(async () => useHook.loadNextPage());
    expect(useHook.dataHeros.length).toBe(4);
  });
  it("Should set hasNextPage to false if there's no load more", async () => {
    await act(async () => useHook.loadNextPage());
    expect(useHook.hasNextPage).toBe(false);
  });

  it("Has next page Function", async () => {
    useHook.hasNextPage = jest.fn();
    expect(useHook.hasNextPage).toBeCalledTimes(0);
  });
});
