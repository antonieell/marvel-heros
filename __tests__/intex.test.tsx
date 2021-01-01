import { render, screen } from "@testing-library/react";
import App from "../pages/index";


describe("App", () => {
  it("renders without crashing", async () => {
    const component = render(<App />);
    const text = await component.findByText('Carregar Mais')
    expect(text).toBeInTheDOM()
  })
})
