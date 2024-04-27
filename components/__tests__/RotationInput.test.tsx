import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import RotationInput from "../RotationInput";

test("onChange function is called with correct value when input changes", () => {
  const onChangeMock = jest.fn();
  const { getByDisplayValue } = render(
    <RotationInput initialValue="0" onChange={onChangeMock} />
  );

  const inputElement = getByDisplayValue("0");
  fireEvent.changeText(inputElement, "90");

  expect(onChangeMock).toHaveBeenCalledWith(90);
});

test("onChange function is called with 0 when input is empty", () => {
  const onChangeMock = jest.fn();
  const { getByDisplayValue } = render(
    <RotationInput initialValue="90" onChange={onChangeMock} />
  );

  const inputElement = getByDisplayValue("90");
  fireEvent.changeText(inputElement, "");

  expect(onChangeMock).toHaveBeenCalledWith(0);
});
