import React from "react";
import { render } from "@testing-library/react-native";
import SelectTypeModal from "../SelectTypeModal";

describe("SelectTypeModal component", () => {
  test("Visualização correta do modal", () => {
    const mockOnSelect = jest.fn();
    const { getByText } = render(<SelectTypeModal onSelect={mockOnSelect} />);
    
    const modalTitle = getByText("Selecione o tipo de geometria");
    expect(modalTitle).toBeDefined();

    const cubeButton = getByText("Cubo");
    const coneButton = getByText("Cone");
    const dodecahedronButton = getByText("Dodecaedro");
    expect(cubeButton).toBeDefined();
    expect(coneButton).toBeDefined();
    expect(dodecahedronButton).toBeDefined();
  });
});
