import React from 'react';
import { render } from '@testing-library/react';
import PageMap from './PageMap';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({}),
}));

describe('PageMap', () => {
    it("renders correctly", () => {
        const { container } = render(<PageMap />);
        expect(container.innerHTML).toMatch("Страница с картой");
    });
});