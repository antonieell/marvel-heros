import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

export function setupHook(hook: any, ...args: any) {
  const returnVal = {};
  function TestComponent() {
    Object.assign(returnVal, hook(...args));
    return null;
  }
  act(() => {
    render(<TestComponent />);
  });
  return returnVal;
}
