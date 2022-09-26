import { screen } from "@testing-library/react";
import { customRender } from "./utils/customRenderer";
import App from "./App"

describe("App, root component", () => {
    it("render's correctly", () => {
        customRender(<App />, {});

        expect(screen.getByTestId('page-app')).toBeInTheDocument();
    })
})

