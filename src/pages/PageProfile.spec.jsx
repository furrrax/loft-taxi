import React from 'react';
import { render } from '@testing-library/react';
import PageProfile from './PageProfile';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({}),
}));

describe('PageProfile', () => {
    it("renders correctly", () => {
        const { container } = render(<PageProfile />);
        expect(container.innerHTML).toMatch("Страница Профиля");
    });
});