import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../redux/store";
import { authMiddleware, regMiddleware } from "../redux/middlwares/auth";

export const customRender = (component, state) => {

    const store = configureStore({
        reducer: rootReducer,
        preloadedState: state,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authMiddleware).concat(regMiddleware),
    });

    return render(
        <BrowserRouter>
            <Provider store={store}>{component}</Provider>
        </BrowserRouter>
    );
};

