import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock('./pages/PageLogin', () => ({PageLogin: () => <h1>Страница входа</h1>}));
jest.mock('./pages/PageReg', () => ({PageReg: () => <h1>Страница регистрации</h1>}));
jest.mock('./pages/PageMap', () => ({PageMap: () => <h1>Страница с картой</h1>}));
jest.mock('./pages/PageProfile', () => ({PageProfile: () => <h1>Страница Профиля</h1>}));

describe("App", () => {
    it("Page renders correctly", () => {
        const { container } = render(App);
        
        expect(container.innerHTML).toMatch("Страница входа");
    });

    describe("when clicked on nav buttons", () => {
        it("opens the corresponding page", () => {
            const { getByText, container } = render(<App />);

            fireEvent.click(getByText('Войти'));
            expect(container.innerHTML).toMatch("Страница с картой");
            fireEvent.click(getByText('Новый пользователь?'));
            expect(container.innerHTML).toMatch("Страница регистрации");
        })
    })
})