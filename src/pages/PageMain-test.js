import { screen } from "@testing-library/react";
import { customRender } from "../utils/customRenderer";
import {PageMain} from "./PageMain";

describe("App", () => {
    it("renders correctly", () => {
        customRender(<PageMain />, {});

        expect(screen.getByTestId('page-main')).toBeInTheDocument();
        
    });
});



/* import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import FormLogin from "./components/FormLogin";

describe("App", () => {
    it("Container renders correctly", () => {
        const { container } = render(App);
        
        expect(container).toBeTruthy();
    });

    it("Login Form renders correctly", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(<PageLogin />)).toBeTruthy();
    });

}); */

