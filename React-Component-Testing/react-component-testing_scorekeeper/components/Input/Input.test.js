import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    render(    <Input
        name="nameOfInputFiled"
        labelText="label"
        placeholder="e.g. Dodelido"
        required
      ></Input>);
    const input = screen.getByRole("textbox");
    const label = screen.getByLabelText(/label/i);
});

test("calls callback on every user input", async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();
    render(<Input onChange={onChange}></Input>) 
    const input = screen.getByRole("textbox")
    await user.type(input, "my game");
    expect(onChange).toHaveBeenCalledTimes(7);
});
