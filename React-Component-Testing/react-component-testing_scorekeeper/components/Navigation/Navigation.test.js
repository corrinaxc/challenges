import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const links = screen.getAllByRole("link");
  expect(links.length).toBe(2);
  expect(links[0]).toHaveTextContent("Play");
  expect(links[1]).toHaveTextContent("History")
});
