import React from 'react';
import { render } from '@testing-library/react';
import PageLogin from './PageLogin';

describe('PageLogin', () => {
    it("Page renders correctly", () => {
        const { container } = render(<PageLogin />);
        expect(container.innerHTML).toMatch("Страница входа");
    });
});