import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PageLogin from './PageLogin';
import {shallow} from 'enzyme';

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
});