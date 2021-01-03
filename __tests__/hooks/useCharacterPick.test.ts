import { useCharacterPick } from "@/hooks/index";
import { setupHook } from "@/utils/index";
import { cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";

jest.mock("../../api/characters.api", () => ({
  getCharacterById: (id: string) => ({
    data: {
      data: {
        results: [
          {
            id: 1011334,
            name: "3-D Man",
            description: "",
            modified: "2014-04-29T14:18:17-0400",
            thumbnail: {
              path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
              extension: "jpg",
            },
            resourceURI:
              "http://gateway.marvel.com/v1/public/characters/1011334",
            comics: {},
            series: {},
            events: {},
            stories: {},
          },
        ],
      },
    },
  }),
}));

describe("useCharacterPick hook", () => {
  afterEach(cleanup);
  it("Error should be true in case not passed characterId", async () => {
    let useHook: any;
    await act(async () => {
      useHook = setupHook(useCharacterPick);
    });
    expect(useHook.error).toBe(true);
  });

  it("Should fetch data", async () => {
    let useHook: any;
    await act(async () => {
      useHook = setupHook(useCharacterPick, 1);
    });
    expect(useHook).not.toBe(undefined);
  });
});
