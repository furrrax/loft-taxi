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

    it('inputs data is valid', () => {
        
        customRender(<FormReg />, {});

        userEvent.type(screen.getByLabelText("Email"), "testmail5@mail.ru");
        userEvent.type(screen.getByLabelText("Как вас зовут?"), "Антон");
        userEvent.type(screen.getByLabelText("Ваша фамилия"), "Иванов");
        userEvent.type(screen.getByLabelText("Придумайте пароль*"), "222555222");
        
        expect(screen.getByLabelText("Email")).toHaveValue("testmail5@mail.ru");
        expect(screen.getByLabelText("Как вас зовут?")).toHaveValue("Антон");
        expect(screen.getByLabelText("Ваша фамилия")).toHaveValue("Иванов");
        expect(screen.getByLabelText("Придумайте пароль*")).toHaveValue("222555222");
    
    })

})