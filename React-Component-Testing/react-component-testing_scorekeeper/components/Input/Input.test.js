import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    render(<Input />);
    const label = screen.getByRole("label");
    const input = screen.getByRole("input");
    expect(label).toBeInTheDocument;
    expect(input).toBeInTheDocument;
    expect(label).toHaveAttribute(name, "Name of Game");
    expect(input).toHaveAttribute(placeholder, "e.g. Dodelido");
});

test("calls callback on every user input", async () => {
    const user = userEvent.setup()
    render(<Input />) 
});
