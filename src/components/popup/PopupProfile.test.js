import * as router from "react-router"
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { customRender } from "../../utils/customRenderer";
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

    it('save profile data', () => {
        
        customRender(<PopupProfile />, {});

        userEvent.type(screen.getByTestId("form-profile-name"),  "Иван");
        userEvent.type(screen.getByTestId("form-profile-card"),  "1111111111111111");
        userEvent.type(screen.getByTestId("form-profile-expiry"),  "2525");
        userEvent.type(screen.getByTestId("form-profile-cvc"),  "111");

        userEvent.click(screen.getByTestId("form-profile-submit"));

        expect(navigate).toHaveBeenCalledWith("/profile/profile-success");
    })

})

