import React from 'react';
import { render } from '@testing-library/react';
import PageReg from './PageReg';

describe('PageReg', () => {
    it("renders correctly", () => {
        const { container } = render(<PageReg />);
        expect(container.innerHTML).toMatch("Страница регистрации");
    });
});