import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Dropdown from "../Dropdown";

describe("Dropdown component", () => {
  test("Renderiza corretamente e contém o título e o ícone", () => {
    const { getByText, getByTestId, toJSON } = render(
      <Dropdown icon="cube" title="Test Title">
        <></>
      </Dropdown>
    );
    const titleElement = getByText("Test Title");
    expect(titleElement).toBeDefined();
  });

  test("Exibe o dropdown quando o botão é pressionado", () => {
    const { getByTestId, queryByTestId } = render(
      <Dropdown icon="cone" title="Test Title">
        <></>
      </Dropdown>
    );

    const dropdownContent = queryByTestId("dropdown-content");
    expect(dropdownContent).toBeNull();

    const button = getByTestId("dropdown-button");
    fireEvent.press(button);

    const updatedDropdownContent = getByTestId("dropdown-content");
    expect(updatedDropdownContent).toBeDefined();
  });
});
