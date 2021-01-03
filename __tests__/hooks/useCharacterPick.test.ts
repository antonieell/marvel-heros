import { useCharacterPick } from "@/hooks/index";
import { cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

jest.mock("../../api/characters.api", () => ({
  getCharacterById: (id: any) => {
    if (id === 2) {
      throw Error("Forces errors in request");
    }
    return new Promise((resolve, rejects) => {
      id === "invalid" && rejects("invalid Id");
      resolve({
        data: {
          data: {
            results: [{}],
          },
        },
      });
    });
  },
}));

describe("useCharacterPick hook", () => {
  afterEach(cleanup);

  it("Error should be true in case not passed characterId", async () => {
    //@ts-ignore
    const { result } = renderHook(() => useCharacterPick());
    expect(result.error).toEqual(Error("characterId should be provided"));
  });

  it("Should fetch data", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useCharacterPick("2")
    );
    await waitForNextUpdate();
    expect(result.current.heroData).toBeTruthy();
  });

  it("If characterId is invalid", async () => {
    const { result } = renderHook(() => useCharacterPick("invalid"));
    expect(result.error).toEqual(Error("invalid CharacterId"));
  });

  it("Error in request", async () => {
    const { result } = renderHook(() => useCharacterPick(2));
    expect(result.current.error).toBeTruthy();
  });
});
