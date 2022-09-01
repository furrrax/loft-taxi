import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import PageLogin from "./pages/PageLogin";
import {shallow} from "enzyme";

describe("App", () => {
    it("Container renders correctly", () => {
        const { container } = render(App);
        
        expect(container).toBeTruthy();
    });

    it("Login Form renders correctly", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(<PageLogin />)).toBeTruthy();
    });

});
