import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  const startText = screen.getByText("0");
  // 둘 중 하나 가능
  // expect(startText).toHaveTextContent("0");
  expect(startText).toBeInTheDocument("0");
});

test("minus button has correct text", () => {
  // const utils = render(<App />);
  // const minusButtonText = utils.getByText("-");

  // screen 사용
  render(<App />);
  const minusButtonText = screen.getByText("-");
  expect(minusButtonText).toHaveTextContent("-");
});
test("plus button has correct text", () => {
  // const utils = render(<App />);
  // const plusButtonText = utils.getByText("+");

  // screen 사용
  render(<App />);
  const plusButtonText = screen.getByText("+");
  expect(plusButtonText).toHaveTextContent("+");
});

test("When the + button is pressed, the counter changes to 1", () => {
  // const utils = render(<App />);
  // const number = utils.getByText("0");
  // const plusButton = utils.getByText("+");

  // screen 사용
  render(<App />);
  const number = screen.getByText("0");
  const plusButton = screen.getByText("+");
  fireEvent.click(plusButton);
  expect(number).toHaveTextContent("1");
});

test("When the - button is pressed, the counter changes to -1", () => {
  // const utils = render(<App />);
  // const number = utils.getByText("0");
  // const plusButton = utils.getByText("-");

  // screen 사용
  render(<App />);
  const number = screen.getByText("0");
  const minusButton = screen.getByText("-");
  fireEvent.click(minusButton);
  expect(number).toHaveTextContent("-1");
});

test("on/off button has (sky)blue color", () => {
  // screen 사용
  render(<App />);
  const ofButton = screen.getByTestId("onf-button");
  expect(ofButton).toHaveStyle("background: skyblue");
});

test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  // screen 사용
  render(<App />);
  const ofButton = screen.getByTestId("onf-button");
  const plusButton = screen.getByText("-");
  const minusButton = screen.getByText("-");
  fireEvent.click(ofButton);
  expect(plusButton).toBeDisabled();
  expect(minusButton).toBeDisabled();
});
