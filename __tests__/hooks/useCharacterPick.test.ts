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
    const { result, waitForNextUpdate } = renderHook(() => useCharacterPick());
    await waitForNextUpdate()
    expect(result.current.error).toBeTruthy()
  });

  it("Should fetch data", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useCharacterPick("2")
    );
    await waitForNextUpdate();
    expect(result.current.heroData).toBeTruthy();
  });

  it("set erro to true if characterId is invalid", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCharacterPick("invalid"));
    await waitForNextUpdate()
    expect(result.current.error).toBeTruthy()
  });

  it("set erro to ture if ocours some error in request", async () => {
    const { result } = renderHook(() => useCharacterPick(2 as any));
    expect(result.current.error).toBeTruthy();
  });
});
