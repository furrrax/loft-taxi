import * as router from "react-router"
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { customRender } from "../../utils/customRenderer";
import { store } from "../../redux/store";
import PopupProfile from "./PopupProfile";

describe("PopupProfile", () => {


    const navigate = jest.fn()

    beforeEach(() => {
        jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    })

    it("render's correctly", () => {
        customRender(<PopupProfile />, {});

        expect(screen.getByTestId('form-profile')).toBeInTheDocument();
    })    

    it('profile data entered correctly', () => {
        
        customRender(<PopupProfile />, {});

        userEvent.type(screen.getByPlaceholderText("Иван"),  "Антон");
        userEvent.type(screen.getByPlaceholderText("5545 2300 3432 4521"),  "1111111111111111");
        userEvent.type(screen.getByPlaceholderText("05/08"),  "2525");
        userEvent.type(screen.getByPlaceholderText("667"),  "111");

        expect(screen.getByPlaceholderText("Иван")).toHaveValue("Антон");
        expect(screen.getByPlaceholderText("5545 2300 3432 4521")).toHaveValue("1111 1111 1111 1111");
        expect(screen.getByPlaceholderText("05/08")).toHaveValue("25/25");
        expect(screen.getByPlaceholderText("667")).toHaveValue("111");
    })

    it('profile data submitted', () => {

        customRender(<PopupProfile />, {});

        userEvent.type(screen.getByPlaceholderText("Иван"),  "Антон");
        userEvent.type(screen.getByPlaceholderText("5545 2300 3432 4521"),  "1111111111111111");
        userEvent.type(screen.getByPlaceholderText("05/08"),  "2525");
        userEvent.type(screen.getByPlaceholderText("667"),  "111");

        userEvent.click(screen.getByTestId("form-profile-submit"))

        setTimeout(() => {
            expect(store.getState().user.cardDataReceived).toBe(true);
        }, 5000)
    })

})

