import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react-native";
import LoginView from "../index";
import { UserContext } from "@/contexts/UserContext";

jest.mock("@/contexts/UserContext", () => ({
    UserContext: jest.fn(() => ({
        checkAlreadyLogged: jest.fn().mockResolvedValue(false), // Mock da função checkAlreadyLogged
        signInUser: jest.fn(), // Mock da função signInUser
    })),
}));

jest.mock("expo-router", () => ({
    navigate: jest.fn(),
}));

describe("Login", () => {
    it("deve renderizar corretamente", () => {
        const { getByPlaceholderText, getByText } = render(<LoginView />);
        () => expect(getByText("Welcome Back!")).toBeTruthy();
        expect(getByText("Please sign in to your account.")).toBeTruthy();
        expect(getByPlaceholderText("Email")).toBeTruthy();
        expect(getByPlaceholderText("Password")).toBeTruthy();
        expect(getByText("Login")).toBeTruthy();
    });

});
