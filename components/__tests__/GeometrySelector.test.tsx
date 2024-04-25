import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import GeometrySelector from "../GeometrySelector";

describe("Geometry selector component", () => {
  test("Renderizando corretamente e contendo elementos filhos", () => {
    const { getByText } = render(<GeometrySelector />);

    const selectButton = getByText("Selecione");
    expect(selectButton).toBeDefined();
  });

  test("Abre a modal ao pressionar o botão 'Selecione'", () => {
    const { getByText, queryByText } = render(<GeometrySelector />);
    const selectButton = getByText("Selecione");

    const modalTitleInitial = queryByText("Selecione o tipo de geometria");
    expect(modalTitleInitial).toBeNull();

    fireEvent.press(selectButton);

    const modalTitle = getByText("Selecione o tipo de geometria");
    expect(modalTitle).toBeDefined();
  });

});
