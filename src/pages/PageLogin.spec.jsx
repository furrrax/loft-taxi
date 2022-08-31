import React from 'react';
import { render } from '@testing-library/react';
import PageLogin from './PageLogin';

describe('PageLogin', () => {
    const { container } = render(<PageLogin />);
    it("Page renders correctly", () => {
        expect(container.innerHTML).toMatch("Войти");
    });
});