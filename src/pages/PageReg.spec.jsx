import React from 'react';
import { render } from '@testing-library/react';
import PageReg from './PageReg';
import {shallow} from 'enzyme';

describe('PageReg', () => {
    const { container } = render(<PageReg />);
    it("Page renders correctly", () => {
        expect(container.innerHTML).toMatch("Регистрация");
    });

    it("Form submitted, but not entered", () => {
        const wrapper = shallow(<PageReg />);
        wrapper.find(".button-submit").simulate("click");
        expect(wrapper.find(".enter-form__title").text()).toEqual("Регистрация");
    });
});