import * as router from "react-router"
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { customRender } from "../utils/customRenderer";
import FormLogin from "./FormLogin";

describe("FormLogin", () => {

    const initialState = {
        isLoggedIn: false,
    }

    const navigate = jest.fn()

    beforeEach(() => {
        jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    })

    it("render's correctly", () => {
        customRender(<FormLogin />, {});

        expect(screen.getByTestId('form-login')).toBeInTheDocument();
    })

    it("redirect to FormReg", () => {
        customRender(<FormLogin />, {});

        userEvent.click(screen.getByTestId("link-to-reg"))

        expect(navigate).toHaveBeenCalledWith("/reg", {"replace" : false, "state": undefined});
    })

    it('logged in', () => {
        
        initialState.isLoggedIn = true

        customRender(<FormLogin />, initialState);

        expect(navigate).toHaveBeenCalledWith("/map", {"replace" : false, "state": undefined});
    })

})

