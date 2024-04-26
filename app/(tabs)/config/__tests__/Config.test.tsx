import React from "react";
import { render } from "@testing-library/react-native";
import Config from "..";

describe("Config screen", () => {
  test("Renderizando a tela corretamente", () => {
    const { getByText } = render(<Config />);
    const textElement = getByText("Configurações de Objetos 3D");
    expect(textElement).toBeDefined();
  });
});
