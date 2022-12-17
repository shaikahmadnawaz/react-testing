import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("counter should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter />);
    const incrementBtn = getByRole("button", { name: "Increment" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementBtn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  it("counter should decrement by 1 if the decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter />);
    const decrementBtn = getByRole("button", { name: "Decrement" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(decrementBtn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(-1);
  });
});
