// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import App from "../App"
describe('app test', () => {
    it('renders component correctly', () => {
        const { container } = render(<App />);
        const el = screen.getByText('home버튼');
        expect(el).toBeInTheDocument();
    });
    it('hbg work', () => {
        const { container } = render(<App />);
        const navi = container.querySelector('.navigation');
        expect(navi).toHaveClass("navigation--inactive");
        let hbg = screen.getByRole('button');
        fireEvent.click(hbg);
        expect(navi).toHaveClass("navigation--active");
        fireEvent.click(hbg);
        expect(navi).toHaveClass("navigation--inactive");

    })
});