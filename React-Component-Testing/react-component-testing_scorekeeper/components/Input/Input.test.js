import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    render(<Input />);
    const label = screen.getByRole("label", );
    const input = screen.getByRole("textbox");
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(label).toHaveAttribute('htmlFor', "Name of Game");
    expect(input).toHaveAttribute('placeholder', "e.g. Dodelido");
});

test("calls callback on every user input", async () => {
    const onChange = jest.fn;
    const user = userEvent.setup()
    render(<Input onChange={onChange}></Input>) 

    const input = screen.getByRole("textbox")

    await user.type(input, "my game")

    expect(onChange).toHaveBeenCalled()
});
