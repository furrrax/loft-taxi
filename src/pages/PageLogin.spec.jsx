import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PageLogin from './PageLogin';
import App from '../App';
import {shallow} from 'enzyme';
import AuthProvider from '../AuthContext';

describe('PageLogin', () => {
    const { container } = render(<PageLogin />);
    it("Page renders correctly", () => {
        expect(container.innerHTML).toMatch("Войти");
    });

    it("Form submitted, but not entered", () => {
        const wrapper = shallow(<PageLogin />);
        wrapper.find(".button-submit").simulate("click");
        expect(wrapper.find(".enter-form__title").text()).toEqual("Войти");
    });

    

    it("Form submitted, and entered", () => {
        const {FormWithProvider} = () => <AuthProvider isLoggedIn={true}><App><PageLogin /></App></AuthProvider>;

        render(FormWithProvider);

        expect(FormWithProvider.find(".enter-form__title").text()).toEqual("Войти");

        //fireEvent.change(screen.getByTestId('email'), { target: { value: 'valid@email.com' } });
        //fireEvent.change(screen.getByTestId('password'), { target: { value: 'validpassword' } });

        fireEvent.click(screen.getAllByTestId('submit'));

        expect(FormWithProvider.innerHTML).toMatch("Вы залогинились");
    });
});
