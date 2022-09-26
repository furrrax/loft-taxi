import * as router from "react-router"
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { customRender } from "../utils/customRenderer";
import FormReg from "./FormReg";

describe("FormReg", () => {

    const navigate = jest.fn()

    beforeEach(() => {
        jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    })

    it("render's correctly", () => {
        customRender(<FormReg />, {});

        expect(screen.getByTestId('form-reg')).toBeInTheDocument();
    })

    it("redirect to FormLogin", () => {
        customRender(<FormReg />, {});

        userEvent.click(screen.getByTestId("link-to-login"))

        expect(navigate).toHaveBeenCalledWith("/login", {"replace" : false, "state": undefined});
    })
})