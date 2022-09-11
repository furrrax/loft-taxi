import {React} from 'react';
import { render } from '@testing-library/react';
import PageMap from './PageMap';
import MapInner from '../components/MapInner';

describe('PageMap', () => {
    it("renders correctly", () => {
        const { wrapper } = render(<PageMap />);
        //expect(container.innerHTML).toMatch("Страница с картой");
        expect(wrapper('Карта')).toBeInTheDocument();
    });
});