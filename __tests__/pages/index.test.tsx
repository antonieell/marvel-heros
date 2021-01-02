import { render, cleanup } from "@testing-library/react";
import CharactersList from '../../pages/index'
import '@testing-library/jest-dom'

describe("Index Characters List", () => {
  afterEach(cleanup);
  it("should renders without crashing", async () => {
    const component = render(<CharactersList />);
    const text = await component.findByText("Carregar Mais");
    expect(text).toBeInTheDocument();
  });
});
