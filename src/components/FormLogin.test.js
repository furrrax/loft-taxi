import * as router from "react-router"
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { customRender } from "../utils/customRenderer";
import { store } from "../redux/store";
import FormLogin from "./FormLogin";

describe("FormLogin", () => {


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
    

    it('inputs data is valid', () => {
        
        customRender(<FormLogin />, {});

        userEvent.type(screen.getByLabelText("Email"), "testmail5@mail.ru");
        userEvent.type(screen.getByLabelText("Введите пароль*"), "222555222");
        
        expect(screen.getByLabelText("Email")).toHaveValue("testmail5@mail.ru");
        expect(screen.getByLabelText("Введите пароль*")).toHaveValue("222555222");

    })

    it('logged in', () => {

        customRender(<FormLogin />, {});

        userEvent.type(screen.getByLabelText("Email"), "testmail5@mail.ru");
        userEvent.type(screen.getByLabelText("Введите пароль*"), "222555222");

        userEvent.click(screen.getByTestId("login-submit"))

        setTimeout(() => {
            expect(store.getState().user.isLoggedIn).toBe(true);
        }, 5000)
    })

})

