import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render (<GameForm>
  </GameForm>)
  const input = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(input).toHaveLength(2);
  expect(button).toHaveTextContent("Create game");

});

test("renders a form with the accessible name 'Create a new game'", () => {
  render (<GameForm>
  </GameForm>)
  const form = screen.getByRole("form")
  expect(form).toHaveTextContent("Create a new game");
});

test("submits the correct form data when every field is filled out", async () => {
  const game = jest.fn();
  render (<GameForm
    onCreateGame={game}
    ></GameForm>)
  const user = userEvent.setup();
  const gameInput = screen.getByLabelText(/Name of game/i);
  const playerNames = screen.getByLabelText(/Player names, separated by comma/i);

  const submitButton = screen.getByRole("button", {name: /create game/i});

  await user.type(gameInput, "Cluedo");
  await user.type (playerNames, "Corrina, David");
  await user.click(submitButton);

  const submittedData = {
    nameOfGame: "Cluedo",
    playerNames: ["Corrina", "David",]
  }
  expect(game).toHaveBeenCalledWith(submittedData);
});


test("does not submit form if one input field is left empty", async () => {
  const game = jest.fn();
  render (<GameForm
  onCreateGame={game}></GameForm>)
  const user = userEvent.setup();
  const gameInput = screen.getByLabelText(/Name of game/i);
  const playerNames = screen.getByLabelText(/Player names, separated by comma/i);

  const submitButton = screen.getByRole("button", {name: /create game/i});

  await user.type(gameInput, "Cluedo");
  await user.click(submitButton);

  expect(game).not.toHaveBeenCalledWith;
});
