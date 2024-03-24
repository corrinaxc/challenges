import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
    render(<Player
    name = "Corrina"
    score="50"></Player>)
    const button = screen.getAllByRole("button");
    expect(button).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
    const handleIncrease = jest.fn();
    const handleDecrease = jest.fn();

    const user = userEvent.setup();

    render (<Player
    onDecreasePlayerScore = {handleDecrease}
    onIncreasePlayerScore = {handleIncrease}
    ></Player>)

    const decreaseButton = screen.getByRole("button", {name: "Decrease Score"});
    const increaseButton = screen.getByRole("button", {name: "Increase Score"});
    
    await user.click(increaseButton);
    await user.click(decreaseButton);
    await user.click(increaseButton);
    await user.click(decreaseButton);
    await user.click(increaseButton);
    await user.click(increaseButton);

    expect(handleDecrease).toHaveBeenCalledTimes(2);
    expect(handleIncrease).toHaveBeenCalledTimes(4);
});
