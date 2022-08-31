import React from 'react';
import { render } from '@testing-library/react';
import PageProfile from './PageProfile';

describe('PageProfile', () => {
    it("renders correctly", () => {
        const { container } = render(<PageProfile />);
        expect(container.innerHTML).toMatch("Страница Профиля");
    });
});