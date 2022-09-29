import * as router from "react-router"
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { customRender } from "../../utils/customRenderer";
import PopupOrder from "./PopupOrder";

describe("PopupOrder", () => {

    const navigate = jest.fn()

    beforeEach(() => {
        jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    })

    it("render's correctly", () => {
        customRender(<PopupOrder />, {});

        expect(screen.getByTestId('form-order')).toBeInTheDocument();
    })

    it("taxi ordered", () => {
        customRender(<PopupOrder />, {});

        userEvent.click(screen.getByTestId("order-select1"));
        userEvent.click(screen.getByText("Пулково"));

        userEvent.click(screen.getByTestId("order-select2"));
        userEvent.click(screen.getByText("Эрмитаж"));

        userEvent.click(screen.getByTestId("order-submit"));

        expect(navigate).toHaveBeenCalledWith("/map/order-success");
    })
})