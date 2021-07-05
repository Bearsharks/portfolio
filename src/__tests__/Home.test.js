// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import Home from "../Home"
describe('Home is', () => {
    const { container } = render(<Home />);
    it('MyFooter가 제대로 렌더링되어야한다.', () => {
        const el = screen.getByText('iginganza');

        expect(el).toBeInTheDocument();
    });

});